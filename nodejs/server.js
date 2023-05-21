const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()

const db = require("./src/config/dbConfig")
const postRoutes = require("./src/routes/postRoutes")
const userRoutes = require("./src/routes/userRoutes")

db.connection()

const app = express()
const port = 8000


app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static('public'))

app.get('/',(req,res)=>{
  res.render("./index.html")
})

app.use('/post',postRoutes)
app.use('/auth',userRoutes)

// http://localhost:8000/post/createPost



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})