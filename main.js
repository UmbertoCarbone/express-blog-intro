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
            contenuto: "Il ciambellone è un dolce tipico della tradizione italiana, perfetto per la colazione o la merenda. Morbido e profumato, si prepara con ingredienti semplici come farina, zucchero, uova e burro.",
            immagine: `http://localhost:${port}/imgs/dolci/ciambellone.jpeg`,
            tags: ["Farina", "Burro", "Uova", "Zucchero", "Latte"],
        },
        {
            titolo: "Cracker Barbabietola",
            contenuto: "I cracker di barbabietola sono uno snack sano e gustoso, perfetti per accompagnare un aperitivo o come spuntino. Realizzati con farina di barbabietola, sono ricchi di fibre e dal sapore unico.",
            immagine: `http://localhost:${port}/imgs/dolci/cracker_barbabietola.jpeg`,
            tags: ["cracker", "barbabietola",],
        },
        {
            titolo: "Pane Fritto Dolce",
            contenuto: "Il pane fritto dolce è un dolce tradizionale italiano, semplice e veloce da preparare. Si tratta di fette di pane dorate in padella, spolverate con zucchero e servite calde.",
            immagine: `http://localhost:${port}/imgs/dolci/pane_fritto_dolce.jpeg`,
            tags: ["Pane", "Uova", "Zucchero", "Latte", "Burro"],
        },
        {
            titolo: "Pasta Barbabietola",
            contenuto: "La pasta di barbabietola è un piatto innovativo e colorato, perfetto per stupire i tuoi ospiti. Ha un sapore delicato e una consistenza morbida.",
            immagine: `http://localhost:${port}/imgs/dolci/pasta_barbabietola.jpeg`,
            tags: ["Barbabietola", "Pasta", "Pecorina Romano DOP", "Scalogno", "Olio"],
        },
        {
            titolo: "Torta Paesana",
            contenuto: "La torta paesana è un dolce tipico della tradizione lombarda, realizzato con pane raffermo, uova, zucchero e latte. È un dolce semplice ma ricco di sapore, perfetto per ogni occasione.",
            immagine: `http://localhost:${port}/imgs/dolci/torta_paesana.jpeg`,
            tags: ["Pane raffermo", "Uova", "Zucchero", "Latte", "Burro"],
        },
    ]
    console.log(dolci)
    res.json(dolci)
})


app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})