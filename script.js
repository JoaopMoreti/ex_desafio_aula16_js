let numero_selecionado = window.document.getElementById('num')
let tabela = window.document.getElementById('seltab')
let div = window.document.getElementById('res')
let valores = []

function nalista (valores,l) {
  if(l.indexOf(valores) = -1){
    return false
  } else {
    return true
  }
}

function adicionar() {
  valores.push(Number(numero_selecionado.value)) //adiciona o numero_selecionado na variavel valores
  let item = document.createElement('option') //criou a tag <option>
  item.text = `Valor ${num.value} adicionado.` //isso é o que vai ser adicionado no option
  tabela.appendChild(item) //esse adiciona o item novo na tabela
  div.innerHTML = '' // serva p/ esvaziar a div todas vez q um número for adicionado

  if (numero_selecionado.value.length == 0) {
    window.alert('Por favor, digite um número !')
  } else if (numero_selecionado.value < 0 || numero_selecionado.value > 100) {
    window.alert('Por favor, digite um número entre 0 e 100 !')
  } else if (valores.indexOf(Number(numero_selecionado.value)) == -1) {
    window.alert('Você já escreveu esse número ! Escreva outro número !')
  } else {
    num.value = ''
    num.focus()
  }
}

function finalizar() {
  if (valores.length == 0) {
    window.alert('Por favor, cadastre um número !')
  } else {
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    let media = 0
    for (let pos in valores) {
      // para a variavel pos dentro do aray valores
      soma += valores[pos] // a variavel soma somará cada conteúdo que valores[pos] for encontrando
      media = soma / valores.length
      if (valores[pos] > maior)
        // se valores na posição pos for maior q a variavel maior
        maior = valores[pos] // maior irá receber esse valor da variavel pos
      if (valores[pos] < menor)
        // se valores na posição pos for menor q a variavel menor
        menor = valores[pos] // menor irá receber esse valor da variavel pos
    }
    div.innerHTML = `<p> Ao todo temos ${valores.length} números cadastrados.</p>`
    div.innerHTML += `<p> O maior valor informado foi ${maior}.</p>`
    div.innerHTML += `<p> O Menor valor informado foi ${menor}.</p>`
    div.innerHTML += `<p> Somando todos os valores, temos ${soma}.</p>`
    div.innerHTML += `<p> A média dos valores digitados é ${media}.</p>`

    // div.innerHTML = `<p> O maior valor informado foi ${maior}. </p>` !Importante: Um innerHTML muda outro innerHTML. P/ q isso não aconteça, usar +=
  }
}
