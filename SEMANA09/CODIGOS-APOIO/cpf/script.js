function validarCPF() {
    let cpf = document.getElementById("cpfInput").value.replace(/[^\d]/g, '');

    if (cpf.length !== 11 || !validarDigitos(cpf)) {
        exibirResultado("CPF inválido.");
    } else {
        exibirResultado("CPF válido.");
    }
}

function validarDigitos(cpf) {
    let soma = 0;

    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }

    let resto = (soma * 10) % 11;
    if (resto === 10 || resto === parseInt(cpf.charAt(9))) {
        soma = 0;
        for (let i = 0; i < 10; i++) {
            soma += parseInt(cpf.charAt(i)) * (11 - i);
        }

        resto = (soma * 10) % 11;
        if (resto === 10 || resto === parseInt(cpf.charAt(10))) {
            return true;
        }
    }
    return false;
}

function exibirResultado(mensagem) {
    let resultadoElement = document.getElementById("result");
    resultadoElement.innerHTML = mensagem;
}
