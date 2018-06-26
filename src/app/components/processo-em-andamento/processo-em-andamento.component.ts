import { Component, OnInit } from '@angular/core';
import { ProcessoService } from '../../services/processo/processo.service';
import { ProcessoEmAndamento } from '../../models/results/processador/processo-em-andamento';

@Component({
  selector: 'app-processo-em-andamento',
  templateUrl: './processo-em-andamento.component.html',
  styleUrls: ['./processo-em-andamento.component.css'],
  providers: [
    ProcessoService
  ]
})
export class ProcessoEmAndamentoComponent implements OnInit {

  processo: ProcessoEmAndamento = new ProcessoEmAndamento();

  constructor(
    private processoService: ProcessoService
  ) { 

    this.processoService.obterProcessoEmAndamento().subscribe(retorno => {
      
      console.log(retorno);

      if (retorno != null) {
        this.processo = retorno;
      }
    })
  }

  ngOnInit() {
  }

}
