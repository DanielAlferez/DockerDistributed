const express = require("express")
const { Client } = require('pg')

const connectionData = {
    user: 'daniel',
    host: 'localhost',
    database: 'dist',
    password: '7447',
    port: 5432
}

const client = new Client(connectionData)

client.connect()

function getPeople(){
    console.log(client)
}

const app = express()
port = 3000

app.get("/", (req, res) => {
    res.send("Hola")
})

app.get('/people', (req, res) => {
    client.query('SELECT * FROM people')
    .then(response => {
        res.send(response.rows)
    })

    .catch(err => {
        return err
    })
})

app.get('/people/:peopleID', (req, res) => {
    client.query('SELECT * FROM people WHERE people_id = $1', [parseInt(req.params.peopleID)])
    .then(response => {
        res.send(response.rows)
    })

    .catch(err => {
        return err
    })
})

app.listen(port, () => {
    console.log("Iniciando...")
})