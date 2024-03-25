// Função para adicionar um item à lista
function addItem() {
    var itemInput = document.getElementById("itemInput");
    var itemText = itemInput.value.trim();
  
    if (itemText !== "") {
      var itemList = document.getElementById("itemList");
      var li = document.createElement("li");
      li.textContent = itemText;
      itemList.appendChild(li);
      itemInput.value = ""; // Limpa o campo de entrada
    } else {
      alert("Por favor, digite um item.");
    }
  }
  