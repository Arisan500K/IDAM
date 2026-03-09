async function resetSpin(){

const res = await fetch(API_URL+"/reset",{

method:"POST"

});

const data = await res.json();

document.getElementById("status").innerText =
data.pesan;

}
