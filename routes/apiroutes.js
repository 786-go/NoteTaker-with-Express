
const app = require("express").Router()
const db = require("../db/db.json")
const fs = require("fs")

app.get('/api/notes', (req, res) => {
    db = JSON.parse( fs.readFileSync("db/db.json"))||[]
    console.log(db)
    res.json(db)
});

app.post('/api/notes', (req, res) => {
    let newNote = {
        id: Math.floor(Math.random() * 100), 
        title: req.body.title,
        text: req.body.text
    }
    db.push(newNote)
    fs.writeFileSync("db/db.json", JSON.stringify(db), function(error){
        if(error) throw error
    })
    console.log(db)
    res.json(db)
});

module.exports = app