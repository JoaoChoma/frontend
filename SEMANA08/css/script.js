function changeColor() {
    var target = document.getElementById("targetElement");
    
    // Gerar uma cor aleatória
    var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    
    // Modificar a cor de fundo do elemento alvo
    target.style.backgroundColor = randomColor;
  }
  