function rollDice(winner){

const dice =
document.getElementById("dice");

let count = 0;

const interval = setInterval(()=>{

dice.innerText =
members[Math.floor(Math.random()*members.length)];

count++;

if(count>20){

clearInterval(interval);

dice.innerText = winner;

}

},100);

}
