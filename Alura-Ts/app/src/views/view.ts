export abstract class View<T> {
  protected elemento: HTMLElement;

  constructor(seletor: string) {
    const elemento = document.querySelector(seletor);
    if (elemento) {
      this.elemento = elemento as HTMLElement;
    } else {
      throw Error(`Seletor ${seletor} não existe no DOM. Verifique`);
    }
  }

  // decorator recebe parâmetro e retorna uma função
  // @logarTempoDeExecucao(true)
  // nesse caso ele NÃO recebe parâmetro e portanto "é direto a função"
  // @inspect
  public update(model: T): void {
    // const t1 = performance.now(); - direcionado para o logar-tempo-de-execucao.ts
    let template = this.template(model);
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
