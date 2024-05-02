// Arquivo calculos.js

function calcular(operacao) {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var resultado;
  
    switch (operacao) {
      case '+':
        resultado = adicao(num1, num2);
        break;
      case '-':
        resultado = subtracao(num1, num2);
        break;
      case '*':
        resultado = multiplicacao(num1, num2);
        break;
      case '/':
        resultado = divisao(num1, num2);
        break;
      default:
        resultado = "Operação inválida";
    }
  
    document.getElementById('resultado').innerText = "Resultado: " + resultado;
  }
  