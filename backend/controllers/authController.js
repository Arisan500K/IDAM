const users = [
{
nama:"Idam",
pin:"080522",
role:"admin"
},
{
nama:"Aki",
pin:"1234",
role:"anggota"
},
{
nama:"Daeli",
pin:"2222",
role:"anggota"
},
{
nama:"Ros",
pin:"3333",
role:"anggota"
}
];

exports.login = (req,res)=>{

const {nama,pin} = req.body;

const user = users.find(u=>u.nama===nama && u.pin===pin);

if(!user){
return res.status(401).json({
status:"gagal",
pesan:"Nama atau PIN salah"
});
}

res.json({
status:"sukses",
user:{
nama:user.nama,
role:user.role
}
});

};
