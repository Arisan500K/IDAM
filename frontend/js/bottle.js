function spinBottle(winner){

const bottle =
document.getElementById("bottle");

bottle.style.transition =
"transform 4s ease-out";

const random =
Math.floor(Math.random()*360)+720;

bottle.style.transform =
"rotate("+random+"deg)";

setTimeout(()=>{

document.getElementById("winner").innerText =
"Pemenang: "+winner;

},4000);

}
