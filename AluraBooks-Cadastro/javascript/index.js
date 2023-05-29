async function buscaEndereco(cep) {
    const logradouro = document.querySelector('#endereco')
    const bairro = document.querySelector('#bairro')
    const cidade = document.querySelector('#cidade')
    const estado = document.querySelector('#estado')
  
    const mensagemErro = document.querySelector('#erro')
    mensagemErro.innerHTML = ''
  
    try {
      const consultaCEP = await fetch(`http://viacep.com.br/ws/${cep}/json/`)
      const consultaCEPConvertida = await consultaCEP.json()
  
      if (consultaCEPConvertida.erro) {
        throw Error('CEP não existente.')
      }
  
      logradouro.value = consultaCEPConvertida.logradouro
      cidade.value = consultaCEPConvertida.localidade
      bairro.value = consultaCEPConvertida.bairro
      estado.value = consultaCEPConvertida.uf
  
      console.log(consultaCEPConvertida)
  
      return consultaCEPConvertida
    } catch (erro) {
      mensagemErro.innerHTML = `<p>CEP inválido. Tente novamente.</p>`
  
      logradouro.value = ''
      cidade.value = ''
      bairro.value = ''
      estado.value = ''
    }
  }
  
  let cep = document.querySelector('#cep')
  cep.addEventListener('focusout', () => buscaEndereco(cep.value))
  