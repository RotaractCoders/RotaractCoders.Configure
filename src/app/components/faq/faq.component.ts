import { Component, OnInit } from '@angular/core';
import { FaqService } from '../../services/faq/faq.service';
import { FaqLista } from '../../models/results/faq/faq-lista';
import { FaqIncluir } from '../../models/inputs/faq/faq-incluir';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
  providers: [
    FaqService
  ]
})
export class FaqComponent implements OnInit {

  lista: FaqLista[] = [];

  constructor(
    private faqService: FaqService
  ) { }

  ngOnInit() {
    this.carregar();
  }

  excluir(item: FaqLista) {
    this.faqService.deletar(item.rowKey).subscribe(() => {
      this.carregar();
    });
  }

  carregar() {
    this.faqService.listar()
      .subscribe(data => this.lista = data);
  }
}
