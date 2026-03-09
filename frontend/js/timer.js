function updateTimer(){

const now = new Date();

const year = now.getFullYear();
const month = now.getMonth();

const lastDay =
new Date(year,month+1,0);

const deadline =
new Date(lastDay);

deadline.setDate(lastDay.getDate()-12);

const diff = deadline - now;

const display =
document.getElementById("timer");

if(diff > 0){

const days =
Math.floor(diff/(1000*60*60*24));

display.innerText =
"Spin ditutup dalam "+days+" hari";

}else{

display.innerText =
"Periode spin sudah ditutup";

}

}

setInterval(updateTimer,1000);

updateTimer();
