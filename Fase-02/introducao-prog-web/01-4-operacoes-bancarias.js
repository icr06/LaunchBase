//Crie um programa para realizar operações bancárias na conta de um usuário.
//Comece criando um objeto com o nome do usuário, suas transações e saldo.

const user = {
    name: "Mariana",
    transactions: [],
    balance: 0
};

//Crie uma função createTransaction para adicionar uma nova transação no array de transações de um usuário, essa função deve receber como parâmetro um objeto de transação.

const transaction = [
    {
        type: 'credit',
        value: 0,
    },
    {
        type: 'debit',
        value: 0
    }
];

function createTransaction(transaction) {
    if(transaction.type == 'credit') {
        user.transactions.push(transaction);
        user.balance = user.balance + transaction.value;
    } else {
        user.transactions.push(transaction);
        user.balance = user.balance - transaction.value;
    }
}

createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });

console.log(user.balance);

//Crie uma função chamada getHigherTransactionByType que recebe como parâmetro o tipo de transação credit/debit, percorre as transações do usuário e retorna o objeto da transação de maior valor com aquele tipo.

function getHigherTransactionByType(transactionType) {
    let higherTransaction;
    let higherValue = 0;
    for(let i=0; i<user.transactions.length; i++) {
        if((user.transactions[i].type == transactionType) && (user.transactions[i].value > higherValue)) {
            higherValue = user.transactions[i].value;
            higherTransaction = user.transactions[i];
        }
    }
    return higherTransaction;
}

console.log(getHigherTransactionByType('credit'));
console.log(getHigherTransactionByType('debit'));

//Crie uma função chamada getAverageTransactionValue que retorna o valor médio das transações de um usuário independente do seu tipo.

function getAverageTransactionValue() {
    let sum = 0;
    for(let transaction of user.transactions) {
        sum = sum + transaction.value;
    }
    return sum / user.transactions.length;
}

console.log(getAverageTransactionValue());

//Crie uma função chamada getTransactionsCount que retorna o número de transações de cada tipo credit/debit, o retorno da função deve ser um objeto.

function getTransactionsCount() {
    let countTypeTransaction = {
        credit: 0,
        debit: 0
    };
    for(let transaction of user.transactions) {
        if(transaction.type == 'credit') {
            countTypeTransaction.credit = countTypeTransaction.credit + 1; 
        } else {
            countTypeTransaction.debit = countTypeTransaction.debit + 1;
        }
    }
    return countTypeTransaction;
}

console.log(getTransactionsCount());


