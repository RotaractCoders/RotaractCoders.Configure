import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SocioIncluir } from '../../models/inputs/socio/socio-incluir';
import { CargoSocio } from '../../models/inputs/socio/cargo-socio';
import { ClubeLista } from '../../models/results/clube/clube-lista';
import { SocioService } from '../../services/socio/socio.service';
import { ClubeService } from '../../services/clube/clube.service';
declare var $: any

@Component({
  selector: 'app-socio-novo',
  templateUrl: './socio-novo.component.html',
  styleUrls: ['./socio-novo.component.css'],
  providers: [
    SocioService,
    ClubeService
  ]
})
export class SocioNovoComponent implements OnInit {

  input: SocioIncluir = new SocioIncluir();
  clubes: ClubeLista[] = [];
  cargo: CargoSocio = new CargoSocio();
  tipoCargo: string[] = ['Distrital', 'Clube'];
  nomeCargoClube: string[] = ['Presidente', 'Secretário', 'Tesoureiro'];
  nomeCargoDistrital: string[] = ['RDR', 'Tesoureiro', 'Secretario'];
  listaCargos: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private socioService: SocioService,
    private clubeService: ClubeService
  ) { }


  ngOnInit() {

    let id: string = '';

    this.route.params.forEach((params: Params) => {
      id = params['id'];
      
      if (id == undefined) {

        this.input = new SocioIncluir();
        return;
      }

      this.socioService.buscar(id)
        .subscribe(data => {
          this.input = data;
          this.input.dataNascimento = this.formatDate(this.input.dataNascimento);
        })
    });

    this.clubeService.listar().subscribe(data => this.clubes = data);
  }

  incluir() {

    if (this.input.rowKey == undefined) {
      this.socioService.incluir(this.input)
      .subscribe(() => {
        window.location.href = 'socio';
      });
    } 
    else {
      this.socioService.atualizar(this.input)
      .subscribe(() => {
        window.location.href = 'socio';
      });
    }
  }

  atualizarCargos(){
    if (this.cargo.tipoCargo == 'Distrital') {
      this.listaCargos = this.nomeCargoDistrital;
    } else if (this.cargo.tipoCargo == 'Clube') {
      this.listaCargos = this.nomeCargoClube;
    }
  }

  excluirCargo(index) {
    this.input.cargos.splice(index, 1);
  }

  novoCargo() {

    this.cargo = new CargoSocio();
    $("#myModal").modal();
    
  }

  incluirCargo() {

    if (this.input.cargos == null)
      this.input.cargos = [];

    this.input.cargos.push(this.cargo);
    $("#myModal").modal('hide');
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
}
