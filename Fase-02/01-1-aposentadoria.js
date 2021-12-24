//Cálculo da aposentadoria
//Obs.: Esse cálculo é fictício, dentro da aposentadoria existem muitos outros fatores para serem levados em conta :)
//O tempo de contribuição mínimo para homens é de 35 anos e, para mulheres, 30 anos;
//Utilizando a regra 85-95, a soma da idade com o tempo de contribuição do homem precisa ser de no mínimo 95 anos, enquanto a mulher precisa ter no mínimo 85 anos na soma;
//Com base nas regras acima imprima na tela as mensagens:
//SE a pessoa estiver aposentada: Silvana, você pode se aposentar!;
//SE a pessoa NÃO estiver aposentada: Silvana, você ainda não pode se aposentar!;

const name = "Silvana";
const sex = "F";
const age = 48;
const contribution = 23;

const calcContribution = age + contribution;

//const homemPodeAposentar = sex == 'M' && contribution >= 35 && calcContribution >= 95
//const mulherPodeAposentar = sex == 'F' && contribution >= 30 && calcContribution >= 85

//if (homemPodeAposentar || mulherPodeAposentar) {
//    console.log(`${name}, você pode se aposentar!`)
//} else {
//    console.log(`${name}, você não pode se aposentar!`)
//}

if(sex == "M") {
    if((contribution >= 35) && (calcContribution >= 95)){
        console.log(`${name}, você pode se aposentar!`)
    } else {
        console.log(`${name}, você não pode se aposentar!`)
    }
} else {
    if((contribution >= 30) && (calcContribution >= 85)) {
        console.log(`${name}, você pode se aposentar!`)
    } else {
        console.log(`${name}, você não pode se aposentar!`)
    }
}