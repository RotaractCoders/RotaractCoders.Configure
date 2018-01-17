import { Component, OnInit } from '@angular/core';
import { EventoLista } from '../../models/results/evento/evento-lista';
import { EventoService } from '../../services/evento/evento.service'
import { NovoEventoComponent } from '../novo-evento/novo-evento.component';
import { Navigation } from 'selenium-webdriver';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css'],
  providers: [
    EventoService
  ]
})
export class AgendaComponent implements OnInit {

  eventos: EventoLista[] = [];

  constructor(
    private eventoService: EventoService
  ) { }

  ngOnInit() {
    this.carregar();
  }

  excluir(item: EventoLista) {
    this.eventoService.deletar(item.rowKey).subscribe(() => {
      this.carregar();
    });
  }

  carregar() {
    this.eventoService.listar()
      .subscribe(data => this.eventos = data);
  }
}
