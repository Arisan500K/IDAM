const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const memberRoutes = require("./routes/members");
const spinRoutes = require("./routes/spin");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use("/api", authRoutes);
app.use("/api", memberRoutes);
app.use("/api", spinRoutes);

app.get("/", (req,res)=>{

res.json({
status:"Server Arisan 500K Aktif",
versi:"1.0"
});

});

app.listen(PORT,()=>{
console.log("Server berjalan di http://localhost:"+PORT);
});

const adminRoutes = require("./routes/admin");
