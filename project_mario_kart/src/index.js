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
    for(let round=1; round<=5; round++){
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
            totalTestSkill1 = diceResult1 + player1.power
            totalTestSkill2 = diceResult2 + player2.power
        }

        if(totalTestSkill1 > totalTestSkill2){
            player1.points++;
        } else if(totalTestSkill1 < totalTestSkill2){
            player2.points++;
        } else {
            console.log("EMPATE!");
        }
        console.log("----------------------------------------------------------------");

    }
}

//função auto-invocável (funcao ... )() 
(async function main(){
    console.log(
        `🏁 Corrida entre ${player1.name} e ${player2.name} começando ... 🚗\n`
    );

    await playRaceEngine(player1, player2);

})() 