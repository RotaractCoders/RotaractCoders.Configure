import { Component, OnInit } from '@angular/core';
import { Lista } from '../../models/results/tipo-evento/lista';
import { TipoEventoService } from '../../services/tipo-evento/tipo-evento.service'

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
