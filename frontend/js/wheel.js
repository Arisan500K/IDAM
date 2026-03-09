const members = [
"Idam",
"Aki",
"Daeli",
"Ros",
"Dewi",
"Septi",
"Medina",
"Agus",
"Elis",
"Tri"
];

const colors = [
"#fbbf24",
"#38bdf8",
"#f472b6",
"#a78bfa",
"#4ade80",
"#fb7185",
"#2dd4bf",
"#fb923c",
"#818cf8",
"#94a3b8"
];

const canvas = document.getElementById("wheelCanvas");

const ctx = canvas.getContext("2d");

let rotation = 0;

function drawWheel(){

const arc = (Math.PI*2)/members.length;

ctx.clearRect(0,0,500,500);

members.forEach((name,i)=>{

ctx.beginPath();

ctx.fillStyle = colors[i%colors.length];

ctx.moveTo(250,250);

ctx.arc(250,250,200,i*arc,(i+1)*arc);

ctx.fill();

ctx.save();

ctx.translate(250,250);

ctx.rotate(i*arc + arc/2);

ctx.fillStyle="#000";

ctx.font="16px Arial";

ctx.textAlign="right";

ctx.fillText(name,180,10);

ctx.restore();

});

}

drawWheel();
