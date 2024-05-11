require('dotenv').config()
const express = require('express')
const cors = require('cors')
const PersonRoutes = require('./src/routes/personRoutes')

const PORT = process.env.PORT || 8000
const app = express()

app.use(cors())
app.use(express.json())

app.use(PersonRoutes)

app.listen(PORT, () => {
  console.log(`Servidor está rodando na porta ${PORT}`)
})