const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();
const port = process.env.PORT || 4001 ;

const app = express();
const router = require('./Routes/routes');

app.use(cors());
app.use(bodyParser.json());
app.use(router);

// START SERVER
app.listen(port , async() => {
    console.log(`Server Listening ${port}`)
});