async function startSpin(){

const user = JSON.parse(localStorage.getItem("user"));

const result = await spinAPI(user.nama);

const winner = result.winner;

animateSpin(winner);

}

function animateSpin(winner){

const index = members.indexOf(winner);

const slice = 360 / members.length;

const stopAngle = 360 - (index * slice) - slice/2;

rotation += 360*5 + stopAngle;

canvas.style.transition =
"transform 6s cubic-bezier(0.1,0,0.1,1)";

canvas.style.transform =
"rotate("+rotation+"deg)";

setTimeout(()=>{

document.getElementById("winner").innerText =
"Pemenang: "+winner;

loadLogs();

},6000);

}
