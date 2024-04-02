// Primeiro, obtenha o elemento pelo ID.
const botao = document.getElementById('meuBotao');
const mensagem = document.getElementById('mensagem');

// Adiciona o ouvinte de evento de clique ao botão
botao.addEventListener('click', function() {
    mensagem.textContent = 'Você clicou no botão!';
});

// Adiciona o ouvinte de evento de mouseover ao botão
botao.addEventListener('mouseover', function() {
    mensagem.textContent = 'Mouse está sobre o botão!';
});

// Adiciona o ouvinte de evento de mouseout para limpar a mensagem quando o mouse sai do botão
botao.addEventListener('mouseout', function() {
    mensagem.textContent = '';
});
f