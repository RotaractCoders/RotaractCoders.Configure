import { Component, OnInit } from '@angular/core';
import { Processo } from '../../models/results/processador/processo';
import { ProcessoService } from '../../services/processo/processo.service';

@Component({
  selector: 'app-lista-processo',
  templateUrl: './lista-processo.component.html',
  styleUrls: ['./lista-processo.component.css'],
  providers: [
    ProcessoService
  ]
})
export class ListaProcessoComponent implements OnInit {

  processos: Processo[] = [];

  constructor(
    private processoService: ProcessoService
  ) { 

    this.processoService.listarProcessamentosFinalizados().subscribe(retorno => {
      
      console.log(retorno);

      if (retorno != null) {

        this.processos = retorno;

        this.processos.forEach(x => {

          x.duracaoProcessamentoClube = this.duracao(x.inicioProcessamentoClube, x.fimProcessamentoClube);
          x.duracaoProcessamentoProjeto = this.duracao(x.inicioProcessamentoProjeto, x.fimProcessamentoProjeto);
          x.duracaoProcessamentoSocio = this.duracao(x.inicioProcessamentoSocio, x.fimProcessamentoSocio);
        });
      }
    })
  }

  duracao(dataInicio:Date, dataFim:Date) : string {

    var s = (new Date(dataFim).getTime() - new Date(dataInicio).getTime());

    return new Date(s).toISOString().slice(11, -1);
  }

  ngOnInit() {
  }

}
