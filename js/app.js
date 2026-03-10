async function startSpin(){

const {value:name}=await Swal.fire({

title:"Pilih Nama Anda",
input:"select",
inputOptions:MEMBERS

})

if(!name) return

animateSpin()

setTimeout(()=>{

let result=randomWinner()

spinResults[name]=result

voteData[result]=(voteData[result]||0)+1

saveData()

Swal.fire("Hasil Spin",result)

renderAll()

checkWinner()

},4000)

}

function checkWinner(){

const total=MEMBERS.length-1
const done=Object.keys(spinResults).length

if(done===total){

let max=0
let winner=""

for(let n in voteData){

if(voteData[n]>max){

max=voteData[n]
winner=n

}

}

winnerData[winner]=getMonth()

saveData()

confetti()

}

}

function renderAll(){

renderStats()
renderLeaderboard()

}

renderAll()
