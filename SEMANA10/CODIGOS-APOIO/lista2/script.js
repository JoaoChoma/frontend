function adicionarItem() {
    var input = document.getElementById("itemInput");
    var valor = input.value;
    
    if (valor !== "") {
      var lista = document.getElementById("lista");
      var novoItem = document.createElement("li");
      novoItem.textContent = valor;
      novoItem.onclick = function() {
        this.parentNode.removeChild(this); // Remove da lista
        input.focus(); // Volta o foco para o input
      };
      lista.appendChild(novoItem);
      
      input.value = ""; // Limpa o campo de texto após adicionar o item
      input.focus(); // Volta o foco para o input
    } else {
      alert("Por favor, digite um item!");
    }
  }
  