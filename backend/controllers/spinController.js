let winnerData = {
bulan:null,
pemenang:null
};

let logs = [];

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

function getCurrentMonth(){

const now = new Date();

return now.getFullYear()+"-"+(now.getMonth()+1);

}

exports.spin = (req,res)=>{

const actor = req.body.actor;

const bulan = getCurrentMonth();

if(winnerData.bulan === bulan){

return res.json({
status:"sukses",
winner:winnerData.pemenang
});

}

const randomIndex =
Math.floor(Math.random()*members.length);

const winner = members[randomIndex];

winnerData = {
bulan:bulan,
pemenang:winner
};

logs.push({
actor:actor,
winner:winner,
time:new Date()
});

res.json({
status:"sukses",
winner:winner
});

};

exports.getLogs = (req,res)=>{
res.json(logs);
};
