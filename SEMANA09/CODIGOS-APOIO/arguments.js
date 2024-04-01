function somar() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
      total += arguments[i];
    }
    return total;
  }
  
  let resultado = somar(5, 10, 15, 20);
  console.log(resultado); // Saída: 50
  