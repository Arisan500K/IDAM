let mode="wheel"

function setMode(m){

mode=m

let icon="🎡"

if(m=="dice") icon="🎲"
if(m=="cup") icon="🥤"

document.getElementById("spinVisual").innerText=icon

}

function animateSpin(){

let visual=document.getElementById("spinVisual")

if(mode=="wheel"){

visual.style.transition="transform 4s"
visual.style.transform="rotate(1440deg)"

}

if(mode=="dice"){

let i=0

let roll=setInterval(()=>{

visual.innerText=["⚀","⚁","⚂","⚃","⚄","⚅"][Math.floor(Math.random()*6)]

i++

if(i>20) clearInterval(roll)

},100)

}

if(mode=="cup"){

let i=0

let shake=setInterval(()=>{

visual.style.transform="rotate("+((Math.random()*40)-20)+"deg)"

i++

if(i>20){

clearInterval(shake)
visual.style.transform="rotate(0)"

}

},100)

}

}
