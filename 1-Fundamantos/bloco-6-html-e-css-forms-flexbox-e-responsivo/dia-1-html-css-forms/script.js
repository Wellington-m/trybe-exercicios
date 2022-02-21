const btnEnviar = document.getElementById("btnEnviar");

function enviar(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let option1 = document.getElementById("option1"); 
    let option2 = document.getElementById("option2"); 
    let option3 = document.getElementById("option3"); 
    let option4 = document.getElementById("option4"); 

    if(name.length < 10 || name.length >40)
    {
        alert("Nome com tamanho incorreto");
        document.getElementById("name").focus();
    }
    else if(email.length <10 || email.length >50)
    {
        alert("Email com tamanho incorreto");
        document.getElementById("email").focus();
    }
    else if(option1.checked === false && option2.checked === false && option3.checked === false && option4.checked === false)
    {
        alert("Selecione um destino preferido");
    }
    else
    {
        alert("Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip");
    }

}

btnEnviar.addEventListener("click", enviar);