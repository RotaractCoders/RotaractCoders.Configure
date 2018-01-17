import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Incluir } from '../../models/inputs/evento/incluir';
import { EventoLista } from '../../models/results/evento/evento-lista';
import { EventoService } from '../../services/evento/evento.service'

@Component({
  selector: 'app-novo-evento',
  templateUrl: './novo-evento.component.html',
  styleUrls: ['./novo-evento.component.css'],
  providers: [
    EventoService
  ]
})
export class NovoEventoComponent implements OnInit {

  input: Incluir = new Incluir();
  programas: string[] = ['Interact', 'Rotaract', 'Rotary'];
  tiposEventos: string[] = ['Reunião', 'Evento', 'Ação', 'Projeto'];

  constructor(
    private route: ActivatedRoute,
    private eventoService: EventoService) { }

  ngOnInit() {

    let id: string = '';

    this.route.params.forEach((params: Params) => {
      id = params['id'];
      
      if (id == undefined) {
        console.log('entrou2');
        this.input = new Incluir();
        return;
      }

      this.eventoService.buscar(id)
        .subscribe(data => {
          this.input = data;

          this.input.data = this.formatDate(this.input.dataEvento);
          this.input.hora = this.formatHour(this.input.dataEvento);

          console.log(this.input);
        })
    });
    
  }

  incluir(){

    this.input.dataEvento = new Date(this.input.data + ' ' + this.input.hora);

    if (this.input.rowKey == undefined) {
      this.eventoService.incluir(this.input)
      .subscribe(() => {
        window.location.href = 'agenda';
      });
    } 
    else {
      this.eventoService.atualizar(this.input)
      .subscribe(() => {
        window.location.href = 'agenda';
      });
    }
  }


  formatDate(date) : string {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }

  formatHour(date) : string {
    var d = new Date(date),
        hora = '' + (d.getHours()),
        minuto = '' + d.getMinutes()

    if (hora.length == 1)
      hora = '0' + hora;

    if (minuto.length == 1)
      minuto = '0' + minuto;

    return [hora, minuto].join(':');
  }
}
