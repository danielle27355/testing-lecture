const express = require('express'),
    bodyParser = require('body-parser'),
    massive = require('massive'),
    app = express();
require('dotenv').config();

//Middleware
app.use(bodyParser.json());
app.use(express.static(`__dirname/../build`))
massive(process.env.TEST_CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('DB Set');
}).catch(err => console.log('Err in Massive'));
const path = require('path');
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'));
});
const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`Application running on port PORT`));