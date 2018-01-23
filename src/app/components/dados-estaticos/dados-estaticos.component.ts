import { Component, OnInit } from '@angular/core';
import { DadoEstaticoIncluir } from '../../models/inputs/dados-estaticos/dado-estatico-incluir';
import { DadoEstaticoService } from '../../services/dado-estatico/dado-estatico.service';

@Component({
  selector: 'app-dados-estaticos',
  templateUrl: './dados-estaticos.component.html',
  styleUrls: ['./dados-estaticos.component.css'],
  providers: [
    DadoEstaticoService
  ]
})
export class DadosEstaticosComponent implements OnInit {

  lema: DadoEstaticoIncluir = new DadoEstaticoIncluir();
  oqueerotaract: DadoEstaticoIncluir = new DadoEstaticoIncluir();
  historiaDistrito: DadoEstaticoIncluir = new DadoEstaticoIncluir();
  numeroSocios: DadoEstaticoIncluir = new DadoEstaticoIncluir();
  numeroClubes: DadoEstaticoIncluir = new DadoEstaticoIncluir();

  constructor(private dadoEstaticoService: DadoEstaticoService) { }

  ngOnInit() {

    this.oqueerotaract.nome = 'oqueerotaract';
    this.historiaDistrito.nome = 'historiaDistrito';
    this.numeroSocios.nome = 'numeroSocios';
    this.numeroClubes.nome = 'numeroClubes';


    this.dadoEstaticoService.buscar('lema').subscribe(retorno => this.lema = retorno);
    this.dadoEstaticoService.buscar('oqueerotaract').subscribe(retorno => this.oqueerotaract = retorno);
    this.dadoEstaticoService.buscar('historiaDistrito').subscribe(retorno => this.historiaDistrito = retorno);
    this.dadoEstaticoService.buscar('numeroSocios').subscribe(retorno => this.numeroSocios = retorno);
    this.dadoEstaticoService.buscar('numeroClubes').subscribe(retorno => this.numeroClubes = retorno);
  }

  salvar() {

    console.log('salvar');

    this.dadoEstaticoService.incluir(this.lema).subscribe(() => {});
    this.dadoEstaticoService.incluir(this.oqueerotaract).subscribe(() => {});
    this.dadoEstaticoService.incluir(this.historiaDistrito).subscribe(() => {});
    this.dadoEstaticoService.incluir(this.numeroSocios).subscribe(() => {});
    this.dadoEstaticoService.incluir(this.numeroClubes).subscribe(() => {});
  }

}
