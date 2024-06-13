catalogo = [];
    
    function addItem(){
      var item = document.getElementById('item').value;

      const obj = {
        item: item,
        id: Date.now()
      }

      catalogo.push(obj);
      //console.log(catalogo);

      const stringJson = JSON.stringify(catalogo);
      //console.log(stringJson);

      localStorage.setItem('memoria', stringJson);
      //localStorage.setItem('carrinho', stringJson);

      consultarBanco();
    }

    function consultarBanco(){
      const stringJson = localStorage.getItem('memoria');
      const obj = JSON.parse(stringJson);
      //console.log(obj);
      imprimir(obj);
    }

    function imprimir(vetorDados){
      document.getElementById('lista').innerHTML = '';
      for(let i = 0; i < vetorDados.length; i++){
        let obj = vetorDados[i];

        let p = document.createElement('p');
        p.innerHTML = `
          id: ${obj.id} - 
          item: ${obj.item}
          <button onclick='addCarrinho(${i})'>Carrinho</button>
        `;
        document.getElementById('lista').appendChild(p);
      }
    }

    const carrinho = [];
    function addCarrinho(indiceItem){

      const stringJson = localStorage.getItem('memoria');
      const obj = JSON.parse(stringJson);


      carrinho.push(obj[indiceItem]);

      const novaStringJson = JSON.stringify(carrinho);
      //console.log(stringJson);

      localStorage.setItem('carrinho', novaStringJson);
    }