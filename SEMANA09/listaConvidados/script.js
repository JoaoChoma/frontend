// Lista de tarefas
const convidados = [];

// Referências aos elementos do HTML
const nome = document.getElementById('nome');
const botao = document.getElementById('add');
const lista = document.getElementById('listaConvidados');

// Adicionar uma nova tarefa
botao.addEventListener("click", function() {
    convidados.push(nome.value);
    nome.value = "";
    atualizar();
    console.log(convidados);
    
});

// Função para atualizar a lista de tarefas exibida
function atualizar() {
    lista.innerHTML = "";
    for (let i = 0; i < convidados.length; i++) {
        const li = document.createElement("li");
        li.textContent = convidados[i];
        lista.appendChild(li);
    }
}

// Inicializar a lista de tarefas
atualizar();

function enviarServidor(){
    var requisicao = convidados;
    window.location.href = 'enviar.php';
}
