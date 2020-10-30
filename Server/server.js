const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors')

dotenv.config()

const app = express();
const port = process.env.PORT || 3000

//middle ware

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-with, Content-Type, Accept, Authorization"
    )
    if (req.method === "OPTIONS") {
        res.headers("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET")
        return res.status(200).json({});
    }
    next();
})

//connection to database
const connectionString = process.env.DATABASE_CONNECTION_STRING
mongoose.connect(
    connectionString, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    }, () => {
        console.log("connected to database")
    }
)

//Route handler
const profileRoutes = require('./app/routes/profile');

//routes
app.use('/api/person', profileRoutes)


//listen to port
app.listen(3000, () => {
    console.log(`server is running on port ${port}`)
})