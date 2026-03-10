let voteData = JSON.parse(localStorage.getItem("voteData")) || {}
let spinResults = JSON.parse(localStorage.getItem("spinResults")) || {}
let winnerData = JSON.parse(localStorage.getItem("winnerData")) || {}
let payData = JSON.parse(localStorage.getItem("payData")) || {}

function saveData(){

localStorage.setItem("voteData",JSON.stringify(voteData))
localStorage.setItem("spinResults",JSON.stringify(spinResults))
localStorage.setItem("winnerData",JSON.stringify(winnerData))
localStorage.setItem("payData",JSON.stringify(payData))

}
