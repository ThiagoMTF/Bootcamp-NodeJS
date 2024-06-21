const RODADAS = 10
const player1 = {
    name: 'Mario',
    speed: 4,
    drift: 3,
    power: 3,
    points : 0
}

const player2 = {
    name: 'Luigi',
    speed: 3,
    drift: 4,
    power: 4,
    points : 0
}

async function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock() {
    let random = Math.random()
    let result 

    switch (true) {
        case random < 0.33:
            result = "RETA";
            break;
    
        case random < 0.66:
            result = "CURVA";
            break;
        default:
            result = "BATALHA";
            break;
    }
    return result;
}

async function logRollResult(playerName, block, diceResult, att){
    console.log(`${playerName} 🎲 rolou um dado de ${block} ${diceResult} + ${att} = ${diceResult + att}`)
}


async function playRaceEngine(player1, player2) {
    console.log("----------------------------------------------------------------");
    for(let round=1; round<=RODADAS; round++){
        console.log(`🏁 Rodada ${round}`);

        //sortear bloco da pista
        let block = await getRandomBlock();
        console.log(`Bloco: ${block}`)

        //rolar dados
        let diceResult1 = await rollDice();
        let diceResult2 = await rollDice();

        //teste de habilidade
        let totalTestSkill1 = 0;
        let totalTestSkill2 = 0;

        if(block === "RETA"){
            totalTestSkill1 = diceResult1 + player1.speed
            totalTestSkill2 = diceResult2 + player2.speed

            await logRollResult(player1.name, "SPEED", diceResult1, player1.speed)
            await logRollResult(player2.name, "SPEED", diceResult2, player2.speed)
        }

        if(block === "CURVA"){
            totalTestSkill1 = diceResult1 + player1.drift
            totalTestSkill2 = diceResult2 + player2.drift
            await logRollResult(player1.name, "DRIFT", diceResult1, player1.drift)
            await logRollResult(player2.name, "DRIFT", diceResult2, player2.drift)
        }

        if(block === "BATALHA"){
            let powerResult1 = diceResult1 + player1.power
            let powerResult2 = diceResult2 + player2.power

            console.log(`${player1.name} batalhou contra ${player2.name}! 🥊`)
            
            await logRollResult(player1.name, "POWER", diceResult1, player1.power)
            await logRollResult(player2.name, "POWER", diceResult2, player2.power)

            if(powerResult1 > powerResult2){
                if(player2.points > 0){
                    player2.points--;
                    console.log(`☠️ ${player2.name} ➖1️⃣ ponto!`)
                }
                console.log(`🏅 ${player1.name} venceu a batalha!`)
            }else if(powerResult1 < powerResult2){
                if(player1.points > 0){
                    player1.points--;
                    console.log(`☠️ ${player1.name} ➖1️⃣ ponto!`)
                }
                console.log(`🏅 ${player2.name} venceu a batalha!`)
            } else console.log("🏳️ Batalha empatada!")
        }

        if(totalTestSkill1 != 0 && totalTestSkill2 != 0){
            if(totalTestSkill1 > totalTestSkill2){
                player1.points++;
                console.log(`${player1.name} marcou ➕1️⃣ ponto!`)
            } else if(totalTestSkill1 < totalTestSkill2){
                player2.points++;
                console.log(`${player2.name} marcou ➕1️⃣ ponto!`)
            } else {
                console.log("🎏 Empate!")
            }
        }
        console.log("----------------------------------------------------------------");
    }
}

async function winnerRace(player1, player2){
    console.log("Resultado final:")
    console.log(`${player1.name}: ${player1.points} ponto(s)`)
    console.log(`${player2.name}: ${player2.points} ponto(s)`)

    player1.points > player2.points ? console.log(`${player1.name} venceu a corrida! Parabéns! 🏆`) : ""
    player1.points < player2.points ? console.log(`${player2.name} venceu a corrida! Parabéns! 🏆`) : ""
    player1.points === player2.points ? console.log(`🏳️ EMPATE FINAL!`) : ""
    console.log("\n\n\n")

}

//função auto-invocável (funcao ... )() 
(async function main(){
    console.log(
        `🏁 Corrida entre ${player1.name} e ${player2.name} começando ... 🚗`
    );

    await playRaceEngine(player1, player2);
    await winnerRace(player1, player2)

})() 