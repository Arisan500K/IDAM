let members = [
{nama:"Idam", pembayaran:500000},
{nama:"Aki", pembayaran:500000},
{nama:"Daeli", pembayaran:300000},
{nama:"Ros", pembayaran:0},
{nama:"Dewi", pembayaran:500000},
{nama:"Septi", pembayaran:500000},
{nama:"Medina", pembayaran:500000},
{nama:"Agus", pembayaran:500000},
{nama:"Elis", pembayaran:500000},
{nama:"Tri", pembayaran:500000}
];

exports.getMembers = (req,res)=>{
res.json(members);
};

exports.updatePayment = (req,res)=>{

const {nama,jumlah} = req.body;

const member = members.find(m=>m.nama===nama);

if(member){
member.pembayaran = jumlah;
}

res.json({
status:"sukses",
data:member
});

};
