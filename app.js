// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    let amigo = document.querySelector("#amigo").value;
    //evalua que el campo no este vacio y que no sea un elemento reptido
    if(amigo!=""&&!amigos.includes(amigo)){
        amigos.push(amigo);
        amigos.forEach((elemento)=>console.log(elemento));

        document.querySelector("#amigo").value="";
    //obtener la listaAmigos para actualizarla
        var lista= document.querySelector("#listaAmigos");
        lista.innerHTML="";
        amigos.forEach((amigo)=>{
            var li = document.createElement("li");
            li.textContent= amigo;
            lista.appendChild(li);

        });
    }else{
        alert("Por favor, ingresa un nombre válido/no repetido.");
    }
    
}

