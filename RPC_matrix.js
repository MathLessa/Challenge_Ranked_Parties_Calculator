let victories = 40
let defeats = 90
let rankInformation = [
    ["Level", "Balance"]
    ["", 0]
]

rankInformation[1] = calculator(victories, defeats)
console.log(`O Herói tem de saldo de ${rankInformation[1][1]} está no nível de ${rankInformation[1][0]}`)

function calculator(victories = 0, defeats = 0){
    let level
    let balance
    
    if(victories<10){
        level = "Ferro"
    } else if (victories>10 && victories<=20){
        level = "Bronze"
    } else if (victories>20 && victories<=50){
        level = "Prata"
    } else if (victories>50 && victories<=80){
        level = "Ouro"
    } else if (victories>80 && victories<=90){
        level = "Diamante"
    } else if (victories>90 && victories<=100){
        level = "Lendário"
    } else if (victories>101){
        level = "Imortal"
    }

    balance = victories-defeats

    return [level, balance]
}