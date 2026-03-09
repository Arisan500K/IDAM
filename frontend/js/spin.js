async function startSpin(){

const user =
JSON.parse(localStorage.getItem("user"));

const result =
await spinAPI(user.nama);

const winner = result.winner;

animateWheel(winner);

}

function animateWheel(winner){

const display =
document.getElementById("winner");

display.innerText = "Memutar roda...";

setTimeout(()=>{

display.innerText =
"Pemenang bulan ini: "+winner;

},3000);

}
