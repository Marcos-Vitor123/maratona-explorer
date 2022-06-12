const elementoResposta = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#inputPergunta")
const buttonPerguntar = document.querySelector("#buttonPerguntar")
const respostas = [
"Certeza!",
"Não tenho tanta certeza.",
"É decididamente assim.",
"Não conte com isso.",
"Sem dúvidas!",
"Pergunte novamente mais tarde.",
"Sim, definitivamente!",
"Minha resposta é não.",
"Você pode contar com isso.",
"Melhor não te dizer agora.",
"A meu ver, sim.",
"Minhas fontes dizem não.",
"Provavelmente.",
"Não é possível prever agora.",
"Perspectiva boa.",
"As perspectivas não são tão boas.",
"Sim.",
"Concentre-se e pergunte novamente.",
"Sinais apontam que sim."
]

// Clicar em fazer pergunta
function fazerPergunta() {

  if(inputPergunta.value == "") {
    elementoResposta.style.color = "yellow"
    elementoResposta.innerHTML = "Digite sua pergunta!"
    setTimeout(function(){
      elementoResposta.style.opacity = 0
    }, 3000)
    return elementoResposta.style.opacity = 1
    
  }

  elementoResposta.style.color = "white"
  buttonPerguntar.setAttribute("disabled", true)

  const pergunta = "<div>" + inputPergunta.value + "</div>"

  // Gerar número aleatório
  const totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

  elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]

  elementoResposta.style.opacity = 1
  // Sumir a resposta depois de 3 segundos
  setTimeout(function() {
    elementoResposta.style.opacity = 0
    buttonPerguntar.removeAttribute("disabled")
  }, 3000)
}
