// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    let amigo = document.querySelector("#amigo").value;
    if(amigo!=""){
        amigos.push(amigo);
        amigos.forEach((elemento)=>console.log(elemento));
    }else{
        alert("Por favor, ingresa un nombre");
    }
    document.querySelector("#amigo").value="";
}

