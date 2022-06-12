const elementoRespostaGoogle = document.querySelector("#respostaGoogle")
const inputPesquisaGoogle = document.querySelector("#inputPesquisaGoogle")
const buttonPesquisar = document.querySelector("#buttonPesquisar")
inputPesquisaGoogle.value = ""

function fazerPesquisaGoogle() {
  elementoRespostaGoogle.style.opacity = 0

  if(inputPesquisaGoogle.value == "") {
    const pesquisar = "<div>" + inputPesquisaGoogle.value + "</div>"
    elementoRespostaGoogle.innerHTML = pesquisar
    elementoRespostaGoogle.style.color = "yellow"
    elementoRespostaGoogle.innerHTML = "Digite a sua pesquisa!"
    setTimeout(function(){
      elementoRespostaGoogle.style.opacity = 0
    }, 3000)
    return elementoRespostaGoogle.style.opacity = 1
  }

  inputPesquisaGoogle.setAttribute("disabled", true)
  const pesquisaGoogle = `https://www.google.com/search?q=${inputPesquisaGoogle.value}`

  window.location.href = pesquisaGoogle
  inputPesquisaGoogle.value = ""

  setTimeout(function() {
    buttonPesquisar.removeAttribute("disabled")
  }, 3000)
}
