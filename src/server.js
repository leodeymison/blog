const express  = require("express")
const initial_path = require("./config/public")

const app = express()
app.use(express.static(initial_path))

// Routes
app.use("/api", require("./routes/datas.routes"))
app.use("/", require("./routes/files.routes"))

app.use((req, res) => {
    res.json("404")
})

app.listen(3000, () => {
    console.log("Rodando.....")
})