export class Negociacao {
  // private _data: Date;
  // private _quantidade: number;
  // private _valor: number;
  constructor(
    private _data: Date,
    // private _quantidade: number,
    // private _valor: number
    // public readonly data: Date,
    public readonly quantidade: number,
    public readonly valor: number
  ) {
    // this._data = data;
    // this._quantidade = quantidade;
    // this._valor = valor;
  }

  //   get quantidade(): number {
  //     return this._quantidade;
  //   }

  //   get valor(): number {
  //     return this._valor;
  //   }

  public static criaDe(
    dataString: string,
    quantidadeString: string,
    valorString: string
  ): Negociacao {
    const exp = /-/g;
    const date = new Date(dataString.replace(exp, ","));
    const quantidade = parseInt(quantidadeString);
    const valor = parseFloat(valorString);
    return new Negociacao(date, quantidade, valor);
  }
  get volume(): number {
    return this.quantidade * this.valor;
  }

  get data(): Date {
    const data = new Date(this._data.getTime());
    return data;
  }

  public paraTexto(): string {
    return `
      Data: ${this.data},
      Quantidade: ${this.quantidade},
      Valor: ${this.valor}
    `;
  }
}
