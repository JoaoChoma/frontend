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
  
    // Aqui você pode fazer qualquer outra coisa com os dados JSON, como enviá-los para um servidor
  });
  