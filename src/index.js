const { config } = require('dotenv');
require('dotenv').config();
const express = require('express');
const app = express();
var cors = require('cors');
// app.use(cors());
app.use(cors({
    origin: "https://asianpaints.pages.dev/"
}));

const bodyParser = require("body-parser");
const morgan = require('morgan');
const userRouter  = require('./routers/userRouter');
require('./db/database');



const PORT = process.env.PORT || 4000;

// app.options("*", cors());
app.use(express.json());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(morgan('dev'));
app.use('/api/v1/user',userRouter)
app.listen(PORT,() => {
    console.log('Listening to port 4000')
})