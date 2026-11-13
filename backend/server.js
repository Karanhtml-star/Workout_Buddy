// Importing express
const express = require('express')
const dotenv = require('dotenv')
const workoutRoute = require('./routes/workouts')

const mongoose = require('mongoose')


dotenv.config()

// Express App
const app = express()

// Middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next()
})

// Route 
app.get('/', (req, res) => {
    res.json({ msg: 'Welcome to our Site' })
})

app.use('/api/workouts/', workoutRoute)

// Connect to DB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(port, () => {
            console.log(`Server is up and listining on at: http://localhost:${port} &connected to our Database`);

        })
    })
    .catch((error) => { console.log(error) })

// port number
const port = process.env.PORT ;

// listen for request
// app.listen(port, () => {
//     console.log(`Server is up and listining on at: http://localhost:${port}`);

// })