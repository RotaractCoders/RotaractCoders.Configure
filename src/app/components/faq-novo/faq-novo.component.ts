import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FaqIncluir } from '../../models/inputs/faq/faq-incluir';
import { FaqService } from '../../services/faq/faq.service';

@Component({
  selector: 'app-faq-novo',
  templateUrl: './faq-novo.component.html',
  styleUrls: ['./faq-novo.component.css'],
  providers: [
    FaqService
  ]
})
export class FaqNovoComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private faqService: FaqService
  ) { }

  input: FaqIncluir = new FaqIncluir();

  ngOnInit() {

    let id: string = '';

    this.route.params.forEach((params: Params) => {
      id = params['id'];
      
      if (id == undefined) {
        console.log('entrou2');
        this.input = new FaqIncluir();
        return;
      }

      this.faqService.buscar(id)
        .subscribe(data => {
          this.input = data;
        })
    });

  }

  salvar() {

    if (this.input.rowKey == undefined) {
      this.faqService.incluir(this.input)
      .subscribe(() => {
        window.location.href = 'faq';
      });
    } 
    else {
      this.faqService.atualizar(this.input)
      .subscribe(() => {
        window.location.href = 'faq';
      });
    }
  }
}
