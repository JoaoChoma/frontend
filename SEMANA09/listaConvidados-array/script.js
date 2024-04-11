// Lista de convidados
const convidados = [];

// Referências aos elementos do HTML
const nome = document.getElementById('nome');
const botao = document.getElementById('add');
const lista = document.getElementById('listaConvidados');

// Adicionar uma novo convidado
botao.addEventListener("click", function() {
    convidados.push(nome.value);
    nome.value = "";
    atualizarLista();
    console.log(convidados);
});

// Função para atualizar a lista de convidados exibida
function atualizarLista() {
    lista.innerHTML = "";
    for (let i = 0; i < convidados.length; i++) {
        const li = document.createElement("li");
        li.textContent = convidados[i];
        li.onclick = function() {
            // Remove o item clicado da lista e do array
            convidados.splice(i, 1);
            atualizarLista();
        };
        lista.appendChild(li);
    }
}

// Inicializar a lista de convidados
atualizarLista();
