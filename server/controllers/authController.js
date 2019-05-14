const bcrypt = require('bcrypt');

module.exports = {
    register: (req, res) => {
        console.log('Register Hit', req.body)
    },
    login: (req, res) => {
        const db = req.app.get("db");
        const { username, password } = req.body;
        db.select.user([username]).then(users => {
        if (users.length) {
            bcrypt.compare(password, users[0].password).then(passwordsMatched => {
            if (passwordsMatched) {
                
                res.send(users[0]);
            } else {
                res.status(403).json({ message: "Wrong password" });
            }
            });
        } else {
            res.status(403).json({ message: "That user is not registered" });
        }
        });
    }
}