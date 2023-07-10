import { NegociacaoController } from "./controllers/negociacao-controller.js";

// const negociacao = new Negociacao(new DataTransfer(), 10, 100);
// console.log(negociacao.volume);

const controller = new NegociacaoController();
const form = document.querySelector(".form");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    controller.adiciona();
  });
} else {
  throw Error(
    "Não foi possível inicializar a aplicação. Verifique se o form existe."
  );
}

const botaoImporta = document.querySelector("#botao-importa");
if (botaoImporta) {
  botaoImporta.addEventListener("click", () => {
    controller.importaDados();
  });
} else {
  throw Error("Botão importa não foi encontrado.");
}
