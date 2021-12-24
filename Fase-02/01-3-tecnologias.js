//Crie um programa que armazena um array de usuários (objetos), cada usuário tem um nome e suas tecnologias (novo array).
//Percorra a lista de usuários com uma estrutura de repetição imprimindo em tela as informações dos usuários:
//Carlos trabalha com HTML, CSS
//Jarmine trabalha com JavaScript, CSS
//Tuane trabalha com HTML, Node.js

const usuarios = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
];

for(let i=0; i<usuarios.length; i++){
    console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias[0]}, ${usuarios[i].tecnologias[1]}`);
}

//Baseado no desafio anterior, utilize a mesma lista de usuários construída.
//Crie uma função que recebe os dados de um objeto de usuário e retorna SE o usuário trabalha com CSS ou não. Essa função deve retornar um boolean true/false.
console.log("==================================");

function checarSeUsuarioUsaCSS(usuario){
    for(let i=0; i<usuario.tecnologias.length; i++){
        if(usuario.tecnologias[i] == 'CSS'){
            return true;
        }
    }
    return false;
}

for (let i = 0; i < usuarios.length; i++) {
    const usuarioTrabalhaComCSS = checarSeUsuarioUsaCSS(usuarios[i]);
  
    if (usuarioTrabalhaComCSS) {
      console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`);
    }
}