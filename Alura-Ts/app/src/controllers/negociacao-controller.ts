import { domInjector } from "../decorators/dom-injector.js";
import { inspect } from "../decorators/inspect.js";
import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";
import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
  @domInjector("#data")
  private inputData: HTMLInputElement;

  @domInjector("#quantidade")
  private inputQuantidade: HTMLInputElement;

  @domInjector("#valor")
  private inputValor: HTMLInputElement;
  private negociacoes = new Negociacoes();
  private negociacoesView = new NegociacoesView("#negociacoesView");
  private mensagemView = new MensagemView("#mensagemView");
  // private readonly DOMINGO = 0; - feito por enums
  // private readonly SABADO = 6; -feito por enums

  constructor() {
    // this.inputData = document.querySelector("#data") as HTMLInputElement;
    // this.inputQuantidade = document.querySelector(
    //   "#quantidade"
    // ) as HTMLInputElement;
    // this.inputValor = document.querySelector("#valor") as HTMLInputElement; - toda essa opção é substituída acima por @domInject('#data/#quantidade/#valor')
    this.negociacoesView.update(this.negociacoes);
  }

  @inspect
  @logarTempoDeExecucao()
  public adiciona(): void {
    // const t1 = performance.now(); - direcionado para o logar-tempo-de-execucao.ts
    // const negociacaoTemp = new Negociacao(null, 0, 0);
    const negociacao = Negociacao.criaDe(
      this.inputData.value,
      this.inputQuantidade.value,
      this.inputValor.value
    );
    // getDay considera os dias da semana de 0 a 6, sendo que 0 começa em domingo, terminando em 6 para sábado;
    // if (negociacao.data.getDay() > 0 && negociacao.data.getDay() < 6) {
    // if (negociacao.data.getDay() > this.DOMINGO && negociacao.data.getDay() < this.SABADO) { - criado método ehDiaUtil;

    if (!this.ehDiaUtil(negociacao.data)) {
      this.mensagemView.update("Permitido apenas negociações em dias úteis.");
      return;
    }
    // negociacao.data.setDate(12); - um buraco, pq dessa forma mesmo sendo readonly consegue alterar
    this.negociacoes.adiciona(negociacao);
    // this.negociacoesView.update(this.negociacoes); - foi para o método atualizaView
    // this.mensagemView.update("Negociação adicionada com sucesso!"); - foi para o método atualizaView
    this.limparFormulario();
    this.atualizaView();

    // const t2 = performance.now();

    // console.log(
    //   `Tempo de execução do método adiciona ${(t2 - t1) / 1000} segundos.`
    // ); - - direcionado para o logar-tempo-de-execucao.ts
  }

  importaDados(): void {
    alert("Oi!");
  }

  private ehDiaUtil(data: Date) {
    return (
      data.getDay() > DiasDaSemana.DOMINGO &&
      data.getDay() < DiasDaSemana.SABADO
    );
  }

  // private criaNegociacao(): Negociacao {
  //   const exp = /-/g;
  //   const date = new Date(this.inputData.value.replace(exp, ","));
  //   const quantidade = parseInt(this.inputQuantidade.value);
  //   const valor = parseFloat(this.inputValor.value);
  //   return new Negociacao(date, quantidade, valor);
  // enviado para negociacao.ts
  // }
  private limparFormulario(): void {
    this.inputData.value = "";
    this.inputQuantidade.value = "";
    this.inputValor.value = "";
    this.inputData.focus();
  }

  private atualizaView(): void {
    this.negociacoesView.update(this.negociacoes);
    this.mensagemView.update("Negociação adicionada com sucesso!");
  }
}
