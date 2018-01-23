import { Component, OnInit } from '@angular/core';
import { ClubeIncluir } from '../../models/inputs/clube/clube-incluir';
import { ClubeLista } from '../../models/results/clube/clube-lista';
import { ClubeService } from '../../services/clube/clube.service';

@Component({
  selector: 'app-clube',
  templateUrl: './clube.component.html',
  styleUrls: ['./clube.component.css'],
  providers: [
    ClubeService
  ]
})
export class ClubeComponent implements OnInit {

  clubes: ClubeLista[] = [];

  constructor(private clubeService: ClubeService) { }

  ngOnInit() {

    this.carregar();
  }

  carregar() {

    this.clubeService.listar().subscribe(lista => {
      this.clubes = lista;
    });
  }

  excluir(clube: ClubeIncluir) {

    this.clubeService.deletar(clube.rowKey).subscribe(() => {
      this.carregar();
    });
  }
}
