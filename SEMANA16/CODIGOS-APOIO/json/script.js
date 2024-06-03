// script.js
document.getElementById('cadastroForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita o comportamento padrão de recarregar a página ao enviar o formulário

  // Obter os valores do formulário
  const nome = document.getElementById('nome').value;
  const idade = document.getElementById('idade').value;
  const cidade = document.getElementById('cidade').value;

  // Criar objeto com os dados do cadastro
  const pessoa = {
    nome: nome,
    idade: idade,
    cidade: cidade
  };

  // Converter o objeto em formato JSON
  const pessoaJSON = JSON.stringify(pessoa);

  // Exibir os dados JSON no console (para fins de demonstração)
  console.log(pessoaJSON);

  // Salvar o JSON no localStorage
  localStorage.setItem('dadosCadastro', pessoaJSON);

  // Recuperar o JSON do localStorage
  const dadosRecuperados = localStorage.getItem('dadosCadastro');
  const pessoaRecuperada = JSON.parse(dadosRecuperados);

  

  // Exibir os dados recuperados no console (para verificar)
  console.log(pessoaRecuperada);

  // Aqui você pode fazer qualquer outra coisa com os dados JSON, como enviá-los para um servidor
});

  