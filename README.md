# HTML
  - HyperText Markup Language<br>
    - Hiper Texto?<br>
    - Marcação<br>
      - Tags<br>
      - Atributos<br>
    - Linguagem<br>
      - Maneira de escrever<br>
# CSS  
  - Apresentação visual para o cliente<br>
  - Estilos no HTML<br>
  - Cascading Style Sheets => Folha de Estilo em Cascata<br>
    - Declaração
      - Seletor<br>
      - Propriedade e Valor<br>
    - Conceitos<br>
    - Cascata<br>
    - Especificidade<br>
    - Box Model<br>
      - Tudo são caixas<br>
      - Caixas possuem determinads propriedades<br>
    - Display block vs inline<br>    
# JavaScript 
  - Sintaxe:<br>
    - Maneira correta de escrever<br>
  - Alguns princípios dessa Linguagem:<br>
    - Variáveis:<br>
      - Variáveis do tipo `let` pode ser aleradas em algum outro momento<br>
      - Variáveis do tipo `const` não sofrem alterações<br>
    - Tipos de dados<br>
      - String:<br>
        - Representada por aspas "duplas" ou 'simples'<br>
      - Number<br>
        - Integer (+ -)<br>
        - Float (+ -)<br>
      - Boolean<br>
        - true ou false<br>
      - Undefined<br>
    - Operadores<br>
      - Atribuido (ex: =) forma de ler pronúncia é: receb<br>
      - Aritiméticos: fazem cálculos<br>
        - soma: +<br>
        - subtrair: -<br>
        - multiplicar: *<br>
        - dividir: /<br>
      - Concatenação de String<br>
        - Concatena usando um operador: +<br>
      - Comparação<br>
        - Transforma a expressão em true ou false<br>
    - Condicional (if/else)<br>
      - Cria uma condição que envolve verdadeiro ou falso<br>
        - Condição if = true: Se der verdadeiro => É executado o bloco de código a seguir<br>
        - Condição if = false: Se der falso => Não é executado o bloco de código a seguir<br>
        - Condição else = true: Se der false na comparação dos dados envolvido na condição if anterior => Executa o código a seguir<br>
        - Condição else = false: Se der true na comparação dos dados envolvido na condição if anterior => Executa o código a seguir<br>
    - Estrutura de dados<br>
      - Array<br>
        - Representado por abre e fecha colchetes:<br>
          - Contém dados separados por vírgula<br>
          - Cada dado é identificado por um índice que inicia do número 0 em diante<br>
          - Exemplo:<br>
                         índices:  0     1   2  3<br>
         `const temperaturas = [23.3, 32.2, 1, 5]`<br>
          - Recebe dados como:<br>
        - Números<br>
        - Strings<br>
        - Arrays<br>
        - Funções<br>
        - Objetos<br>
        - E qualquer outro tipo de dados<br>
      - Vetor<br>
      - Lista<br>
      - Objetos<br>
        - Variável `const` que recebe várias propriedades<br>
        - Exemplo:<br>
        ```
        const pessoa {
          nome: "Mayk",
          idade: 38,
          filhos: ["k", "E", "J", "L", "G"]
        }
        ```
    - Função<br>
      - Criação<br>
        - Exemplo:<br>
        ```
          function nomeDela() {
            código aqui
          }
        ```
      - Execução<br>
        - Exemplo:<br>
        ```
          function nomeDela() {
            código aqui
          }

          nomeDela()
        ```
      - Parâmetros<br>
        - Exemplo:<br>
        ```
          function nomeDela(a, b) {
            console.log(a + b)
          }

          nomeDela(1, 1)
        ```
      - retorno<br>
        - Exemplo:<br>
        ```
          function nomeDela(a, b) {
            return a + b
          }

          const multiplica = soma(2, 2) * 4
        ```
    - Extensões da linguagem (ex: Math, date ...)<br>
      - Math.random() // Gera número aleatórios entre 0 e 1<br>
      - Math.floor(1.2) // Arredonda o número fracionário para baixo - ex: 1.2 = 1<br>
      - Math.ceil(1.2) // Arredonda o número fracionário para cima - ex: 1.2 = <br>
    - DOM - Document Object Model<br>
      - window<br>
      - window.alert("alerta")<br>
      - document<br>
      - document.write("texto")<br>
      - Manipular elementos<br>
      - document.documentElement.style.background = "black"<br>

Link do projeto acima: https://marcos-vitor123.github.io/maratona-explorer/
