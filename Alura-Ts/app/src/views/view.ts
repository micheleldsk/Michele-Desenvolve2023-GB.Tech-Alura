import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";

export abstract class View<T> {
  protected elemento: HTMLElement;
  private escapar = false;

  constructor(seletor: string, escapar?: boolean) {
    const elemento = document.querySelector(seletor);
    if (elemento) {
      this.elemento = elemento as HTMLElement;
    } else {
      throw Error(`Seletor ${seletor} não existe no DOM. Verifique`);
    }
    if (escapar) {
      this.escapar = escapar;
    }
  }

  @logarTempoDeExecucao()
  public update(model: T): void {
    // const t1 = performance.now(); - direcionado para o logar-tempo-de-execucao.ts
    let template = this.template(model);
    if (this.escapar) {
      template = template.replace(/<script>[\s\S]*?<\/script>/, "");
    }
    this.elemento.innerHTML = template;

    // const t2 = performance.now();

    // console.log(
    //   `Tempo de execução do método update ${(t2 - t1) / 1000} segundos.`
    // ); - direcionado para o logar-tempo-de-execucao.ts
  }

  protected abstract template(model: T): string;
  // template(model: T): string {
  //   throw Error("Classe filha precisa implementar o método template.");
  // } - passando o método para abstract, fica sob responsabilidade da classe filha sua implementação e o código não compila;
}
