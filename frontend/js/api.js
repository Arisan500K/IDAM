const API_URL = "http://localhost:3000/api";

async function loginAPI(nama,pin){

const res = await fetch(API_URL+"/login",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({nama,pin})
});

return res.json();

}

async function getMembers(){

const res = await fetch(API_URL+"/members");
return res.json();

}

async function updatePayment(nama,jumlah){

const res = await fetch(API_URL+"/payment",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({nama,jumlah})
});

return res.json();

}

async function spinAPI(actor){

const res = await fetch(API_URL+"/spin",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({actor})

});

return res.json();

}

async function getLogs(){

const res = await fetch(API_URL+"/logs");

return res.json();

}
