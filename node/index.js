const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}
const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sql = `INSERT INTO people(name) values('Usando RUN 2')`
connection.query(sql)

let texto = ""
connection.query("SELECT name FROM people", function (err, result, fields){
    for (let i = 0; i < result.length; i++) {
        texto = texto + "<h3>- " + result[i].name + "</h3>";
    }
})

connection.end()

app.get('/', (req,res) => {
    res.send('<h1>Full Cycle Rocks!</h1>' + '<h2>Lista de nomes</h2>' + texto)
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})