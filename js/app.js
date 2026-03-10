const MEMBERS=[
"Idam","Aki","Daeli","Ros","Dewi",
"Septi","Medina","Agus","Elis","Tri"
]

let voteData=JSON.parse(localStorage.getItem("vote"))||{}
let spinData=JSON.parse(localStorage.getItem("spin"))||{}
let payData=JSON.parse(localStorage.getItem("pay"))||{}
let winner=localStorage.getItem("winner")||null

let mode="wheel"

function setMode(m){

mode=m

document.getElementById("spinVisual").innerText=
m=="wheel"?"🎡":m=="dice"?"🎲":"🥤"

}

function randomName(exclude){

let list=MEMBERS.filter(n=>n!==exclude)

return list[Math.floor(Math.random()*list.length)]

}

async function startSpin(){

const {value:name}=await Swal.fire({

title:"Pilih Nama Anda",
input:"select",
inputOptions:MEMBERS

})

if(!name)return

if(!payData[name]){

Swal.fire("Anda belum bayar")
return

}

if(spinData[name]){

Swal.fire("Anda sudah spin")
return

}

animate()

setTimeout(()=>{

let result=randomName(name)

spinData[name]=result

if(!winner){

voteData[result]=(voteData[result]||0)+1

}

save()

Swal.fire("Hasil Spin",result)

render()

checkWinner()

},3000)

}

function animate(){

let v=document.getElementById("spinVisual")

v.style.transform="rotate(1080deg)"

setTimeout(()=>{

v.style.transform="rotate(0)"

},1000)

}

function checkWinner(){

let total=MEMBERS.length-1

if(Object.keys(spinData).length===total){

let max=0
let w=""

for(let n in voteData){

if(voteData[n]>max){

max=voteData[n]
w=n

}

}

winner=w

localStorage.setItem("winner",w)

confetti()

}

}

function save(){

localStorage.setItem("vote",JSON.stringify(voteData))
localStorage.setItem("spin",JSON.stringify(spinData))
localStorage.setItem("pay",JSON.stringify(payData))

}

function render(){

renderStats()
renderHistory()
renderMembers()
renderLeaderboard()

if(winner){

document.getElementById("winner").innerText=winner

}

}

function renderStats(){

let html=""

let max=0

for(let n in voteData){

if(voteData[n]>max)max=voteData[n]

}

for(let n in voteData){

let v=voteData[n]

let w=(v/max)*100

html+=`

<div>

${n} (${v})

<div class="bar" style="width:${w}%"></div>

</div>

`

}

document.getElementById("stats").innerHTML=html

}

function renderHistory(){

let html=""

for(let n in spinData){

html+=`${n} → ${spinData[n]}<br>`

}

document.getElementById("history").innerHTML=html

}

function renderMembers(){

let html=""

MEMBERS.forEach(n=>{

html+=`<div class="member">${n}</div>`

})

document.getElementById("members").innerHTML=html

}

function renderLeaderboard(){

let arr=[]

for(let n in voteData){

arr.push({n,v:voteData[n]})

}

arr.sort((a,b)=>b.v-a.v)

let html=""

arr.forEach((x,i)=>{

html+=`${i+1}. ${x.n} (${x.v})<br>`

})

document.getElementById("leaderboard").innerHTML=html

}

render()
