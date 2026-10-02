//=================================================
// SELECIONANDO ELEMENTOS DO DOM
//=================================================

// Selecionando por ID
// console.log(document.getElementById("titulo"))
// para a visualização do console.

let titulo = document.getElementById("titulo");
let subtitulo = document.getElementById("subtitulo");
let paragrafo = document.getElementById("paragrafo");
let imagem = document.getElementById("imageste");

// Selecionando por classe
let caixas = document.getElementsByClassName("box");

// Mostrar no console
console.log(titulo);
console.log(caixas);
console.log(imagem);

//===============================
// FUNÇÃO ALTERAR
//==============================

function alterar() {
    titulo.innerHTML = "Snoopy";
    subtitulo.innerText = "Snoopy é o personagem favorito desse usuário";
}
