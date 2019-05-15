const express = require('express');
const massive = require('massive');
const aC = require('./controllers/authController');
const app = express();
require('dotenv').config();

//Middleware
app.use(express.json());

massive(process.env.TEST_CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('DB Set');
}).catch(err => console.log('Err in Massive'));

// Endpoints
app.post('/user/login', aC.login);


const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`Application running on port ${PORT}`));
