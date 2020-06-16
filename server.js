require('dotenv').config()
const express = require('express')
const morgan = require('morgan')

console.log(process.env.API_TOKEN)

const app = express()

app.use(morgan('dev'))

const validTypes = [`Bug`, `Dark`, `Dragon`, `Electric`, `Fairy`, `Fighting`, `Fire`, `Flying`, `Ghost`, `Grass`, `Ground`, `Ice`, `Normal`, `Poison`, `Psychic`, `Rock`, `Steel`, `Water`]

//7b967bbe-afc2-11ea-b3de-0242ac130004

function handleGetTypes(req, res) {
    res.json(validTypes)
}

app.get('/types', handleGetTypes)

const PORT = 8000

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`)
})