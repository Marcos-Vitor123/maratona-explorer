const elementoRespostaGoogle = document.querySelector("#respostaGoogle")
const inputPesquisaGoogle = document.querySelector("#inputPesquisaGoogle")
const buttonPesquisar = document.querySelector("#buttonPesquisar")
inputPesquisaGoogle.value = ""

function fazerPesquisaGoogle() {

  if(inputPesquisaGoogle.value == "") {
    elementoRespostaGoogle.style.color = "yellow"
    elementoRespostaGoogle.innerHTML = "Digite a sua pesquisa!"
    setTimeout(function(){
      elementoRespostaGoogle.style.opacity = 0
    }, 3000)
    return elementoRespostaGoogle.style.opacity = 1
  }

  inputPesquisaGoogle.setAttribute("disabled", true)
  const pesquisar = "<div>" + inputPesquisaGoogle.value + "</div>"
  elementoRespostaGoogle.innerHTML = pesquisar
  const pesquisaGoogle = `https://www.google.com/search?q=${inputPesquisaGoogle.value}`

  window.location.href = pesquisaGoogle
  inputPesquisaGoogle.value = ""

  setTimeout(function() {
    elementoRespostaGoogle.style.opacity = 0
    buttonPesquisar.removeAttribute("disabled")
  }, 3000)
}
