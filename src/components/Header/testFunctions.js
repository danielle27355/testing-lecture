const axios = require('axios');

// Functions to test:
module.exports = {
    unitTestLogin : (username, password) => {
        axios.post('/user/login', { username, password })
    },
    unitTestSignup: (username, email, password) => {
        axios.post('/user/signup', { username, email, password })
    }
}