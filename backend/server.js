const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        status: "Server Arisan 500K Aktif",
        versi: "1.0"
    });
});

app.listen(PORT, () => {
    console.log("Server berjalan di http://localhost:" + PORT);
});
