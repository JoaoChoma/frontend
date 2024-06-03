// scripts.js
let listaDeCompras = JSON.parse(localStorage.getItem('listaDeCompras')) || [];

function salvarLista() {
    localStorage.setItem('listaDeCompras', JSON.stringify(listaDeCompras));
}

function limparForm() {
    document.getElementById('item').value = '';
    document.getElementById('valor').value = '';
}

function validaForm() {
    let item = document.getElementById('item').value;
    let valor = parseFloat(document.getElementById('valor').value);
    if (!item || isNaN(valor)) {
        alert('Por favor, preencha todos os campos corretamente.');
        return false;
    } else {
        return true;
    }
}

function create() {
    if (validaForm()) {
        let item = document.getElementById('item').value;
        let valor = parseFloat(document.getElementById('valor').value);

        let indiceEdicao = -1;
        let objExistente = listaDeCompras.find((element, index) => {
            if (element.item === item) {
                indiceEdicao = index;
                return true;
            }
            return false;
        });

        if (indiceEdicao >= 0) {
            listaDeCompras[indiceEdicao] = { item, valor };
        } else {
            listaDeCompras.push({ item, valor });
        }

        salvarLista();
        limparForm();
        atualizarTabela();
    }
}

function editarItem(indice) {
    let obj = listaDeCompras[indice];
    document.getElementById('item').value = obj.item;
    document.getElementById('valor').value = obj.valor;
}

function excluirItem(indice) {
    if (confirm(`Tem certeza que deseja excluir o item ${listaDeCompras[indice].item}?`)) {
        listaDeCompras.splice(indice, 1);
        salvarLista();
        atualizarTabela();
    }
}

function atualizarTabela() {
    let tableBody = document.getElementById('item-list');
    tableBody.innerHTML = '';

    listaDeCompras.forEach((item, indice) => {
        let tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${item.item}</td>
            <td>R$ ${item.valor.toFixed(2)}</td>
            <td>
                <button onclick="editarItem(${indice})" class="btn btn-primary me-2">Editar</button>
                <button onclick="excluirItem(${indice})" class="btn btn-secondary">Excluir</button>
            </td>
        `;
        tableBody.appendChild(tr);
    });

    atualizarValorTotal();
}

function atualizarValorTotal() {
    let valorTotal = listaDeCompras.reduce((total, item) => total + item.valor, 0);
    document.getElementById('valor-total').textContent = `Valor Total: R$ ${valorTotal.toFixed(2)}`;
}

// Inicialização da tabela
atualizarTabela();
console.log(listaDeCompras);
