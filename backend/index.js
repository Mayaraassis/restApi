require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.use(
    express.urlencoded({
        extended: true
    })
)
var cors = require('cors')
app.use(cors()) 

app.use(express.json())
const personRoutes = require('./routes/personRoutes')
app.use('/person', personRoutes)

app.get('/', (req, res ) => {

    res.json({message: 'Express'})
})

const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.0c9oxqg.mongodb.net/?retryWrites=true&w=majority&appName=APICluster`)
.then( () => {
    console.log('Server has started!')
    app.listen(3000)
})
.catch((err) => console.log(err))