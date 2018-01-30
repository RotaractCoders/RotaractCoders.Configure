import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ArquivoIncluir } from '../../models/inputs/arquivo/arquivo-incluir';
import { ArquivoService } from '../../services/arquivo/arquivo.service';

@Component({
  selector: 'app-arquivo-novo',
  templateUrl: './arquivo-novo.component.html',
  styleUrls: ['./arquivo-novo.component.css'],
  providers: [
    ArquivoService
  ]
})
export class ArquivoNovoComponent implements OnInit {

  categorias: string[] = ['Manual', 'Boletim distrital', 'Edital'];
  input: ArquivoIncluir = new ArquivoIncluir();

  constructor(
    private route: ActivatedRoute,
    private arquivoService: ArquivoService) { }

  ngOnInit() {

    let id: string = '';

    this.route.params.forEach((params: Params) => {
      id = params['id'];
      
      if (id == undefined) {

        this.input = new ArquivoIncluir();
        return;
      }

      this.arquivoService.buscar(id)
        .subscribe(data => this.input = data);
    });
  }

  incluir() {

    if (this.input.rowKey == undefined) {
      this.arquivoService.incluir(this.input)
      .subscribe(() => {
        window.location.href = 'arquivo';
      });
    } 
    else {
      this.arquivoService.atualizar(this.input)
      .subscribe(() => {
        window.location.href = 'arquivo';
      });
    }
  }

}
