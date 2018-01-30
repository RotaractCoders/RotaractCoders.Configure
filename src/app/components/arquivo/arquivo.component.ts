import { Component, OnInit } from '@angular/core';
import { ArquivoIncluir } from '../../models/inputs/arquivo/arquivo-incluir';
import { ArquivoLista } from '../../models/results/arquivo/arquivo-lista';
import { ArquivoService } from '../../services/arquivo/arquivo.service';

@Component({
  selector: 'app-arquivo',
  templateUrl: './arquivo.component.html',
  styleUrls: ['./arquivo.component.css'],
  providers: [
    ArquivoService
  ]
})
export class ArquivoComponent implements OnInit {

  arquivos: ArquivoLista[] = [];

  constructor(private arquivoService: ArquivoService) { }

  ngOnInit() {

    this.carregar();
  }

  carregar() {

    this.arquivoService.listar().subscribe(lista => {
      this.arquivos = lista;
    });
  }

  excluir(arquivo: ArquivoIncluir) {

    this.arquivoService.deletar(arquivo.rowKey).subscribe(() => {
      this.carregar();
    });
  }
}
