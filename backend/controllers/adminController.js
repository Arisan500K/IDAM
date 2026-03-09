let winnerData = {
bulan:null,
pemenang:null
};

exports.resetSpin = (req,res)=>{

winnerData = {
bulan:null,
pemenang:null
};

res.json({
status:"sukses",
pesan:"Spin berhasil direset"
});

};
