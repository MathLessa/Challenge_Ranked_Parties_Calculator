let victories = 40
let defeats = 90
let level = levelCalculator(victories)
let balance = balanceCalculator(victories, defeats)

function levelCalculator(victories = 0){
    if(victories<10){
        return "Ferro"
    } else if (victories>10 && victories<=20){
        return "Bronze"
    } else if (victories>20 && victories<=50){
        return "Prata"
    } else if (victories>50 && victories<=80){
        return "Ouro"
    } else if (victories>80 && victories<=90){
        return "Diamante"
    } else if (victories>90 && victories<=100){
        return "Lendário"
    } else if (victories>101){
        return "Imortal"
    }
}

function balanceCalculator(victories = 0, defeats = 0){
    return victories-defeats
}

console.log(`O Herói tem de saldo de ${balance} está no nível de ${level}`)