//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo(nome){
    let amigo = document.getElementById("amigo").value;
    
    if (amigo === "") {
        alert("Por favor, insira um nome.");
    }else{
        amigos.push(amigo);
    }
    
    document.getElementById("amigo").value = "";
    atualizarListaAmigos();
}

function atualizarListaAmigos(){
    let lista = document.getElementById("listaAmigos");

    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        const item = document.createElement("li");
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

function sortearAmigo(){
    if (amigos.length === 0) {
        alert("Não há amigos para sortear.");
    }else{
        let lista = document.getElementById("listaAmigos");
        lista.innerHTML = "";
        
        let index = Math.floor(Math.random() * amigos.length);
        
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = `O amigo sorteado é: ${amigos[index]}`;
    }
}
