module.exports = {
    register: (db, user) => {
        return db.query('insert into users(username, password) values(${username}, ${password}) returning *;',{
            username: user.username,
            password: user.password
        })
    },
    login: (req, res) => {
        
        
    }
}