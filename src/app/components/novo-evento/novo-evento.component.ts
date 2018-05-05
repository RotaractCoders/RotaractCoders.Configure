import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Incluir } from '../../models/inputs/evento/incluir';
import { EventoLista } from '../../models/results/evento/evento-lista';
import { EventoService } from '../../services/evento/evento.service'
import { GoogleMapsService } from '../../services/google-maps/google-maps.service';
import { Pesquisa } from '../../models/results/google-maps/pesquisa';
import { GoogleMap } from '@agm/core/services/google-maps-types';

@Component({
  selector: 'app-novo-evento',
  templateUrl: './novo-evento.component.html',
  styleUrls: ['./novo-evento.component.css'],
  providers: [
    EventoService,
    GoogleMapsService
  ]
})
export class NovoEventoComponent implements OnInit {

  input: Incluir = new Incluir();
  programas: string[] = ['Interact', 'Rotaract', 'Rotary'];
  tiposEventos: string[] = ['Reunião', 'Evento', 'Ação', 'Projeto'];
  enderecoStatus: string = 'Invalido';
  zoom: number = 10;

  constructor(
    private route: ActivatedRoute,
    private eventoService: EventoService,
    private googleMapsService: GoogleMapsService) { }

  ngOnInit() {

    let id: string = '';

    this.route.params.forEach((params: Params) => {
      id = params['id'];
      
      if (id == undefined) {

        this.input = new Incluir();

        this.input.latitude = -23.4770317;
        this.input.longitude = -46.6165583;

        return;
      }

      this.eventoService.buscar(id)
        .subscribe(data => {
          this.input = data;

          this.input.data = this.formatDate(this.input.dataEvento);
          this.input.hora = this.formatHour(this.input.dataEvento);

          this.pesquisarEndereco(this.input.endereco);
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

  pesquisarEndereco(endereco: string) {
    
    console.log(endereco);
    if (endereco == "" || endereco == undefined) {
      
      this.enderecoStatus = "Invalido";
      this.input.latitude = 0;
      this.input.longitude = 0;
      this.input.endereco = endereco;

      return;
    }
    
    this.enderecoStatus = "Pesquisando";
    
    this.googleMapsService.pesquisar(endereco).subscribe(res => {

      var retorno: Pesquisa = res;

      console.log('ok');
      console.log(retorno);

      if (retorno.status == 'OK' && retorno.results.length == 1) {

        this.enderecoStatus = "Valido";
        this.input.latitude = retorno.results[0].geometry.location.lat;
        this.input.longitude = retorno.results[0].geometry.location.lng;
        this.input.endereco = endereco;

        this.zoom = 15;
      }
      else {

        this.enderecoStatus = "Invalido";
        this.input.latitude = 0;
        this.input.longitude = 0;
        this.input.endereco = endereco;
      }
        
    });
    
  }

  formatDate(date) : string {
    var d = new Date(date);
    d.setDate(d.getDate());

        var month = '' + (d.getMonth() + 1),
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
