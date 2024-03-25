function Promocao() {
// Implementar as variáveis que serão manipuladas pelo programa.
var enVeiculo = document.getElementById("enVeiculo");
var enPreco = document.getElementById("enPreco");
var rsVeiculo = document.getElementById("rsVeiculo");
var rsEntrada = document.getElementById("rsEntrada");
var rsParcela = document.getElementById("rsParcela");
//Obtendo os conteúdos inseridos pelos usuários por meio dos campos de entrada no sistema.
var veiculo = enVeiculo.value;
	var preco = Number(enPreco.value);    
	//Cálculo do valor de entrada das parcelas.
	var entrada = preco * 0.30;
	var parcelas = (preco * 0.30) / 48;
	//Respostas dos conteúdos.
	rsVeiculo.textContent = "Promoção: " + veiculo;
	rsEntrada.textContent = "Entrada de R$: " + entrada.toFixed(2);
	rsParcela.textContent = "+ 48x de R$: " + parcelas.toFixed(2);
}

//Implementando a referência para o elemento botão = btValores.
var btValores = document.getElementById("btValores");
//Carregando a função do evento DOM ao clicar no botão: "Opções de Valores".
btValores.addEventListener("click", Promocao);