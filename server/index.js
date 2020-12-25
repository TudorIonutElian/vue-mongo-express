const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv/config')
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Preluare rute din folderul routes
const produseRoutes = require('./routes/api/produse');
const categoriiRoutes = require('./routes/api/categorii');
const retururiRoutes = require('./routes/api/retururi');

// Conectare la cluster
try {
    mongoose.connect(process.env.DB_STRING, { useNewUrlParser: true }, () => {
        console.log("Connected");
    })
} catch (error) {
    console.log({ message: error })
}

app.use('/api/produse', produseRoutes);
app.use('/api/categorii', categoriiRoutes);
app.use('/api/retururi', retururiRoutes);


app.get('/', (req, res) => {
    res.send('Hello');
});

// Definire port pentru server
const port = 3000;

// Start Server

app.listen(process.env.PORT || port, () => { console.log(`Server started on: ${port}`) });