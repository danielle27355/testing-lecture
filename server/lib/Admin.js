module.exports = {
    getAdmin: (db) => {
        return db.query("select * from admins where id=1")
    },
    createAdmin: (db, admin) => {
        return db.query("insert into admins(username, email, photo) values (${username}, ${email}, ${photo}) returning *;", {
            username: admin.username,
            email: admin.email,
            photo: admin.photo,
            created_at: new Date()
        })
    }
}