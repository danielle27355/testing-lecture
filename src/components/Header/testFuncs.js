const axios = require('axios');

module.exports = {
    testLogin: (username, password) => {
        axios.post('/user/login', {username, password})
    },
    testSignup: (username, email, password) => {
        axios.post('/user/login', {username, email, password})
    }
}