const express  = require("express")
const path = require("path")

const initial_path = path.join(__dirname, "public")

const app = express()
app.use(express.static(initial_path))

app.get("/", (req, res) => {
    res.sendFile(path.join(initial_path, "home.html"))
})
app.get("/:id", (req, res) => {
    res.sendFile(path.join(initial_path, "article.html"))
})

app.use((req, res) => {
    res.json("404")
})

app.listen(3000, () => {
    console.log("Rodando.....")
})