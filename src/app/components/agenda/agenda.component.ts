import { Component, OnInit } from '@angular/core';
import { Lista } from '../../models/results/tipo-evento/lista';
import { TipoEventoService } from '../../services/tipo-evento/tipo-evento.service'

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css'],
  providers: [
    TipoEventoService
  ]
})
export class AgendaComponent implements OnInit {

  tipoEventos: Lista[] = [];

  constructor(
    private tipoEventoService: TipoEventoService
  ) { }

  ngOnInit() {
    this.tipoEventoService.listar()
      .subscribe(data => this.tipoEventos = data);
  }

}
