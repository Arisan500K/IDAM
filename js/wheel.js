function randomWinner(){

let active = MEMBERS.filter(n=>!winnerData[n])

return active[Math.floor(Math.random()*active.length)]

}
