

function logar(){

  let login = document.getElementById("username").value;
  let senha = document.getElementById("password").value;

  if(login != "" || senha != ""){

    
    if(login ==="nelso" && senha==="12345"){
      document.getElementById("respostaLogin").innerHTML = "Bem vindo, Nelso!"

      let token = "nelso";
      JSON.stringify(token);
      localStorage.setItem("token", token);
     
      window.location.href = "/adm/home.html";
    }else{
      document.getElementById('respostaLogin').innerHTML = "Login ou senha incorretos";
    }

    
  }else{
    document.getElementById('respostaLogin').innerHTML = "Preencha todos os campos";
  }
  
  
}