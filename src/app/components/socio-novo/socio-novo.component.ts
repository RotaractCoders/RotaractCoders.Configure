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
  tipoCargo: string[] = ['Clube', 'Distrital', 'Rotaract Brasil'];
  fotoPerfil: any;
  fotoPerfilAlterada: boolean = false;

  nomeCargoClube: string[] = [
    'Presidente', 
    'Secretário', 
    'Tesoureiro',
    'Diretor de Protocolo',
    'Diretor de Serviços Internos e Companheirismo',
    'Diretor de Desenvolvimento Profissional',
    'Diretor de Serviços Internacionais',
    'Diretor de Serviços à Comunidade',
    'Diretor de Imagem Pública'];

  nomeCargoDistrital: string[] = [
    'Representante Distrital de Rotaract',
    'Vice-Representante Distrital de Rotaract',
    'Tesoureiro Distrital', 
    'Secretária Distrital',
    'Representante Distrital Assistente - Área Centro Leste',
    'Representante Distrital Assistente - Área Leste',
    'Representante Distrital Assistente - Área Norte',
    'Representante Distrital Assistente - Área Guarulhos e Região',
    'Representante Distrital Assistente - Área Alto Tietê',
    'Diretor Distrital de Protocolo',
    'Diretor Distrital de Projetos',
    'Diretor Distrital de Serviços Internos e Companheirismo',
    'Diretor Distrital de Serviços à Comunidade',
    'Diretor Distrital de Desenvolvimento Profissional',
    'Diretor Distrital de Serviços Internacionais',
    'Diretor Distrital de Integração Interact - Rotaract',
    'Diretor Distrital de Imagem Pública',
    'Designer Gráfico Offiline Distrital',
    'Designer Gráfico Digital Distrital',
    'Social Media Distrital',
    'Editor Audiovisual Distrital',
    'Redatora Distrital',
    'Programador Distrital',
    'Conselheiro Distrital',
    'Chairman Distrital de Rotaract',
    'Governador do Distrito',
    'Conjuge Governador do Distrito',
    'Representante Distrital de Interact'
  ];

  listaCargos: string[] = [];
  idClube: string;

  constructor(
    private route: ActivatedRoute,
    private socioService: SocioService,
    private clubeService: ClubeService
  ) { }


  ngOnInit() {

    let id: string = '';
    var nomeClube: string = '';

    this.route.params.forEach((params: Params) => {
      id = params['id'];
      nomeClube = params['nomeClube'];
      this.idClube = params['idClube'];

      console.log(this.idClube);

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

    this.clubeService.listar().subscribe(data => { 
        this.clubes = data;

        if (nomeClube != '') {
          this.input.clube = nomeClube;
        }
      });
  }

  incluir() {

    if (this.fotoPerfilAlterada) {

      this.socioService.incluirFoto(this.fotoPerfil).subscribe(nomeFoto => {
        this.input.foto = nomeFoto;
        this.salvarFoto();
      });

    } else {
      this.salvarFoto();
    }
  }

  private salvarFoto() {
    
    if (this.input.rowKey == undefined) {
      
      this.socioService.incluir(this.input)
        .subscribe(() => {
          window.location.href = 'clube/editar/' + this.idClube;
        });
    } else {
      
      this.socioService.atualizar(this.input)
        .subscribe(() => {
          window.location.href = 'clube/editar/' + this.idClube;
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

  uploadFile(event) {
    let files = event.target.files;
    if (files.length > 0) {
      this.socioService.incluirFoto(files[0]).subscribe(nomeFoto => {
        this.input.foto = nomeFoto;
      });
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
    var d = new Date(date);
    d.setDate(d.getDate() + 1);

        var month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }

  addDays(data, days) {
    var dat = new Date(data);
    dat.setDate(dat.getDate() + days);
    return dat;
  }
}


