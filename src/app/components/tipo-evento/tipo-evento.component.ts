import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Lista } from '../../models/results/tipo-evento/lista';
import { TipoEventoService } from '../../services/tipo-evento/tipo-evento.service'

@Component({
  selector: 'app-tipo-evento',
  templateUrl: './tipo-evento.component.html',
  styleUrls: ['./tipo-evento.component.css'],
  providers: [
    TipoEventoService
  ]
})
export class TipoEventoComponent implements OnInit {

  tipoEventos: Lista[] = [];
  descricaoNovoEvento: string;

  heroForm: FormGroup;

  constructor(
    private tipoEventoService: TipoEventoService
  ) { }

  ngOnInit() {
    this.carregar();
  }

  incluir() {
    this.tipoEventoService.incluir(this.descricaoNovoEvento)
      .subscribe(
        () => {

          this.descricaoNovoEvento = '';
          this.carregar();
        });
  }

  carregar() {
    this.tipoEventoService.listar()
      .subscribe(data => this.tipoEventos = data);
  }

  excluir(id: string) {
    this.tipoEventoService.deletar(id)
      .subscribe(() => this.carregar());
  }
}
