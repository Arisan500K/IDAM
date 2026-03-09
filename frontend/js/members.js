async function loadMembers(){

const members = await getMembers();

const container = document.getElementById("memberList");

let html="";

members.forEach(m=>{

let status = m.pembayaran >= 500000 ? "LUNAS" : "BELUM LUNAS";

html += `
<div class="member">

<b>${m.nama}</b>

<p>Pembayaran: Rp ${m.pembayaran}</p>

<p>Status: ${status}</p>

</div>
`;

});

container.innerHTML = html;

}
