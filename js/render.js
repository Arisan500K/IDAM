function renderStats(){

let html=""

let max=0

for(let n in voteData){
if(voteData[n]>max) max=voteData[n]
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

document.getElementById("stat").innerHTML=html

}

function renderLeaderboard(){

let arr=[]

for(let n in voteData){

arr.push({name:n,v:voteData[n]})

}

arr.sort((a,b)=>b.v-a.v)

let html=""

arr.forEach((a,i)=>{

html+=`${i+1}. ${a.name} (${a.v})<br>`

})

document.getElementById("leaderboard").innerHTML=html

}
