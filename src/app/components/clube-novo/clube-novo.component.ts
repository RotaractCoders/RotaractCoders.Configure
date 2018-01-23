import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ClubeIncluir } from '../../models/inputs/clube/clube-incluir';
import { ClubeService } from '../../services/clube/clube.service';

@Component({
  selector: 'app-clube-novo',
  templateUrl: './clube-novo.component.html',
  styleUrls: ['./clube-novo.component.css'],
  providers: [
    ClubeService
  ]
})
export class ClubeNovoComponent implements OnInit {

  input: ClubeIncluir = new ClubeIncluir();

  constructor(
    private route: ActivatedRoute,
    private clubeService: ClubeService) { }

  ngOnInit() {

    let id: string = '';

    this.route.params.forEach((params: Params) => {
      id = params['id'];
      
      if (id == undefined) {

        this.input = new ClubeIncluir();
        return;
      }

      this.clubeService.buscar(id)
        .subscribe(data => {
          this.input = data;
          this.input.dataFundacao = this.formatDate(this.input.dataFundacao);
        })
    });
  }

  incluir() {

    this.input.numeroDistrito = '4430';

    if (this.input.rowKey == undefined) {
      this.clubeService.incluir(this.input)
      .subscribe(() => {
        window.location.href = 'clube';
      });
    } 
    else {
      this.clubeService.atualizar(this.input)
      .subscribe(() => {
        window.location.href = 'clube';
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
}
