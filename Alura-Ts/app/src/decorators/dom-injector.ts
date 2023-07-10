export function domInjector(setletor: string) {
  return function (target: any, propertyKey: string) {
    console.log(
      `Modificando prototype ${target.constructor.name} e adicionando getter para a propriedade ${propertyKey}.`
    );

    const getter = function () {
      const elemento = document.querySelector(setletor);
      console.log(
        `Buscando elemento do DOM com o seletor ${setletor} para injetar em ${propertyKey}.`
      );

      return elemento;
    };

    Object.defineProperty(target, propertyKey, { get: getter });
  };
}
