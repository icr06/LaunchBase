//Cálculo do IMC
//Baseado no valor obtido através desse cálculo exiba as seguintes mensagens:
//SE o IMC maior ou igual a 30: Carlos você está acima do peso;
//SE o IMC menor que 29.9: Carlos você não está acima do peso;

const name = "Carlos";
const weight = 84;
const height = 1.88;

const imc = weight / (height * height);

if(imc >= 30) {
    console.log(`${name} você está acima do peso.`);
} else {
    console.log(`${name} você não está acima do peso.`);
}