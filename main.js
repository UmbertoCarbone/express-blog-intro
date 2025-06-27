const express = require("express")
const app = express()
const port = 3010

app.use(express.static("public"))

app.get("/", (req, res) => {
    res.send("Server del mio blog!")
})

app.get("/api/blog", (req, res) => {
    const dolci = [
        {
            titolo: "Ciambellone",
            contenuto: "asd",
            immagine: "asad",
            tags: "wd",
        },
        {
            titolo: "Cracker Barbabietola",
            contenuto: "asd",
            immagine: "asd",
            tags: "asd",
        },
        {
            titolo: "Pane Fritto Dolce",
            contenuto: "asd",
            immagine: "asd",
            tags: "asd",
        },
        {
            titolo: "Pasta Barbabietola",
            contenuto: "asd",
            immagine: "asd",
            tags: "asd",
        },
        {
            titolo: "Torta Paesana",
            contenuto: "asd",
            immagine: "",
            tags: "",
        },
    ]
    console.log(dolci)
    res.json(dolci)
})


app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})