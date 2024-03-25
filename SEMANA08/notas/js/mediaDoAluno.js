function calculaMedia() {
    	//Declaração das variáveis para obter referência dos elementos.
      	var enNome = document.getElementById("enNome");
      	var enNota1 = document.getElementById("enNota1");
      	var enNota2 = document.getElementById("enNota2");
      	var enNota3 = document.getElementById("enNota3");
      	var rsSituacao = document.getElementById("rsSituacao");
      	var rsMedia = document.getElementById("rsMedia");
      
      		//Obtendo os conteúdos assim que o usuário final informar na página do site.
      		var nome = enNome.value;
      		var nota1 = Number(enNota1.value);
      		var nota2 = Number(enNota2.value);
      		var nota3 = Number(enNota3.value);
      	
      		//Cálculo da Média das notas do aluno.
      		var media = (nota1 + nota2 + nota3) / 3.0;
      	
      		//Apresentação da Média do aluno.
      		rsMedia.textContent = "Média das Notas é: " + media.toFixed(2);
      	
      		//Implementando a lógica de programação com estrutura composta de condições.
      		if (media >= 7.0 && media <= 10.0) {
      			//Exibe a mensagem de aluno na situação: Aprovado e modifica a cor da fonte do texto.
      			rsSituacao.textContent = "Meus parabéns " + nome + ", você foi aprovado(a)."
      			rsSituacao.style.color = "blue";
      		} else if(media >= 4.0 && media < 7.0) {
      			notaExame = 10.0 - media;
      			//Exibe a mensagem de aluno na situação: Exame e modifica a cor da fonte do texto.
      			rsSituacao.textContent = "Olá " + nome + ", você está de exame. Sua nota para o exame é: " + notaExame.toFixed(2);
      			rsSituacao.style.color = "green";
      		} else {
      			//Exibe a mensagem de aluno na situação: Reprovado e modifica a cor da fonte do texto.
      			rsSituacao.textContent = "Olá " + nome + ", você está reprovado."
      		}
      	}
      	//Criando a referência com o botão Resultado.
      	var resultado = document.getElementById("btResultado");
      	//Adicionando um evento do tipo listener, para carregar a função implementada em JavaScript.
      	resultado.addEventListener("click", calculaMedia); 