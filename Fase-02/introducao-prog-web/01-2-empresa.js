//Crie um programa que armazena dados da empresa Rocketseat dentro de um objeto chamado empresa.
//Imprima em tela utilizando console.log o nome da empresa e seu endereço no seguinte formato:
//A empresa Rocketseat está localizada em Rua Guilherme Gembala, 260

const empresa = {
    nome: "Rocketseat",
    cor: "Roxo",
    foco: "Programação",
    endereco: {
        rua: "Rua Guilherme Gembala",
        numero: 260
    }
}

console.log(`A ${empresa.nome} está localizada em ${empresa.endereco.rua}, ${empresa.endereco.numero}`)