import { Component, OnInit } from '@angular/core';
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

  socios: SocioLista[] = [];

  constructor(private socioService: SocioService) { }

  ngOnInit() {

    this.carregar();
  }

  carregar() {

    this.socioService.listar().subscribe(lista => {
      this.socios = lista;
    });
  }

  excluir(socio: SocioIncluir) {

    this.socioService.deletar(socio.rowKey).subscribe(() => {
      this.carregar();
    });
  }

}
