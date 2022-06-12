# ▶ HTML
    ■ HyperText Markup Language
      ◆ Hiper Texto?
      ◆ Marcação
        ● Tags
        ● Atributos
      ◆ Linguagem
        ● Maneira de escrever

# ▶ CSS  
    ■ Apresentação visual para o cliente
    ■ Estilos no HTML
    ■ Cascading Style Sheets => Folha de Estilo em Cascata

##  ▶ Declaração
      ■ Seletor
      ■ Propriedade e Valor

    ▶ Conceitos
      ■ Cascata
      ■ Especificidade
      ■ Box Model
        ◆ Tudo são caixas
        ◆ Caixas possuem determinads propriedades
      ■ Display block vs inline
      
# ▶ JavaScript 
    ■ Sintaxe:
      ◆ Maneira correta de escrever

    ■ Alguns princípios dessa Linguagem:

      ◆ Variáveis:
        ● Variáveis do tipo `let` pode ser aleradas em algum outro momento
        ● Variáveis do tipo `const` não sofrem alterações

      ◆ Tipos de dados
        ● String:
          ► Representada por aspas "duplas" ou 'simples'
        ● Number
          ► Integer (+ -)
          ► Float (+ -)
        ● Boolean
          ► true ou false
        ● Undefined

      ◆ Operadores
        ● Atribuido (ex: =) forma de ler pronúncia é: recebe
        ● Aritiméticos: fazem cálculos
          ► soma: +
          ► subtrair: -
          ► multiplicar: *
          ► dividir: /
        ● Concatenação de String
          ► Concatena usando um operador: +
        ● Comparação
          ► Transforma a expressão em true ou false
      
      ◆ Condicional (if/else)
        ● Cria uma condição que envolve verdadeiro ou falso
          ► Condição if = true: Se der verdadeiro => É executado o bloco de código a seguir
          ► Condição if = false: Se der falso => Não é executado o bloco de código a seguir
          ► Condição else = true: Se der false na comparação dos dados envolvido na condição if anterior => Executa o código a seguir
          ► Condição else = false: Se der true na comparação dos dados envolvido na condição if anterior => Executa o código a seguir
      
      ◆ Estrutura de dados
        ● Array
          ► Representado por abre e fecha colchetes:
            * Contém dados separados por vírgula
            * Cada dado é identificado por um índice que inicia do número 0 em diante
            * Exemplo:
                              índices:  0     1   2  3
              `const temperaturas = [23.3, 32.2, 1, 5]`
            * Recebe dados como:
              - Números
              - Strings
              - Arrays
              - Funções
              - Objetos
              - E qualquer outro tipo de dados
        ● Vetor
        ● Lista
        ● Objetos
          ► Variável `const` que recebe várias propriedades
          ► Exemplo:
            ```
            const pessoa {
              nome: "Mayk",
              idade: 38,
              filhos: ["k", "E", "J", "L", "G"]
            }
            ```
      ◆ Função
        ● Criação
          ► Exemplo:
            ```
              function nomeDela() {
                código aqui
              }
            ```
        ● Execução
          ► Exemplo:
            ```
              function nomeDela() {
                código aqui
              }

              nomeDela() 
            ```
        ● Parâmetros
          ► Exemplo:
            ```
              function nomeDela(a, b) {
                console.log(a + b)
              }

              nomeDela(1, 1)
            ```
        ● retorno
          ► Exemplo:
              ```
                function nomeDela(a, b) {
                  return a + b
                }

                const multiplica = soma(2, 2) * 4
              ```
      
      ◆ Extensões da linguagem (ex: Math, date ...)
        ● Math.random() // Gera número aleatórios entre 0 e 1
        ● Math.floor(1.2) // Arredonda o número fracionário para baixo - ex: 1.2 = 1
        ● Math.ceil(1.2) // Arredonda o número fracionário para cima - ex: 1.2 = 2

      ◆ DOM - Document Object Model
        ● window
        ● window.alert("alerta")
        ● document
        ● document.write("texto")
        ● Manipular elementos
        ● document.documentElement.style.background = "black"
