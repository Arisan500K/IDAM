async function login(){

const nama = document.getElementById("nama").value;
const pin = document.getElementById("pin").value;

const result = await loginAPI(nama,pin);

if(result.status==="sukses"){

localStorage.setItem("user",JSON.stringify(result.user));

window.location.href="dashboard.html";

}else{

alert("Nama atau PIN salah");

}

}
