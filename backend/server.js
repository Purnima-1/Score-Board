const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const userRoutes = require('./routes/userRoutes')
const cors = require('cors')

const app = express()
dotenv.config()
connectDB()
const corsOp = {
    origin: "*",
    methods:['GET','POST','PUT'],
    allowedHeaders: ["Content-Type", "Authorization"],
}
app.use(cors(corsOp))
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(userRoutes)
app.get('/',(req,res) => {
    res.send('Hello Score Board')
})
const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server is running on ${PORT}`))