const express = require('express');
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require('./config/db');
const emailRoutes = require('./routes/emailRoutes');
require('dotenv').config();

connectDB();

app.use(cors());
app.use(bodyParser.json());

app.use("/mail", emailRoutes);


app.get('/', (req, res) => {
    res.send('Hello World!');
});

const port = process.env.PORT || 5001;
app.listen(port, () => {
    console.log('Server is running on port 5001');
});