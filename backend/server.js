const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')

const app = express()
dotenv.config()
connectDB()
app.get('/',(req,res) => {
    res.send('Hello Score Board')
})
const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server is running on ${PORT}`))