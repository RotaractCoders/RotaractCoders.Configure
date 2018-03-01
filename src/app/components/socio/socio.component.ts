import { Component, OnInit, Input} from '@angular/core';
import { RouterModule, Routes, Route, Router }    from '@angular/router';

import { SocioIncluir } from '../../models/inputs/socio/socio-incluir';
import { SocioLista } from '../../models/results/socio/socio-lista';
import { SocioService } from '../../services/socio/socio.service';

@Component({
  selector: 'app-socio',
  templateUrl: './socio.component.html',
  styleUrls: ['./socio.component.css'],
  providers: [
    SocioService
  ]
})
export class SocioComponent implements OnInit {

  @Input() nomeClube: string;
  @Input() idClube: string;
  socios: SocioLista[] = [];

  constructor(private socioService: SocioService, private router: Router) { }

  ngOnInit() {

    this.carregar();
  }

  carregar() {

    this.socioService.listar().subscribe(lista => {
      
      this.socios = lista;

      if (this.nomeClube != null) {
        
       this.socios = this.socios.filter(x => x.clube == this.nomeClube);
      }
    });
  }

  novo() {

    this.router.navigate(['/socio/novo', {nomeClube: this.nomeClube, idClube: this.idClube}]);
  }

  editarSocio(socio: SocioIncluir) {
    this.router.navigate(['/socio/editar/' + socio.rowKey, {idClube: this.idClube}]);
  }

  excluir(socio: SocioIncluir) {

    this.socioService.deletar(socio.rowKey).subscribe(() => {
      this.carregar();
    });
  }

}
