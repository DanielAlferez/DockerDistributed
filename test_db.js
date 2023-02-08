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
client.query('SELECT * FROM people')
.then(response => {
    console.log(response.rows)
    client.end()
})

.catch(err => {
    client.end()
})