const express = require('express');
const bodyParser = require('body-parser');

const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Preluare rute din folderul routes
const produseRoutes = require('./routes/api/produse');



app.use('/api/produse', produseRoutes);
app.get('/', (req, res) => {
    res.send('Hello');
});

// Definire port pentru server
const port = 3000;

// Start Server
app.listen(process.env.PORT || port, () => { console.log(`Server started on: ${port}`) });