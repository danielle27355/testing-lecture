const bcrypt = require('bcrypt');

module.exports = {
    register: (db, admin) => {
        return db.query("insert into users(username, password) values (${username}, ${password}) returning *;", {
            username: admin.username,
            password: admin.password
        })
    },
    login: (db) => {
        console.log('Login Hit', req.body);
    }
}