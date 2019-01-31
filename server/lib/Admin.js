module.exports = {
    getAdmin: (db) => {
        return db.query("select * from admins where id=1")
    },
    createAdmin: (db, admin) => {
        return db.query("insert into admins(username, email, photos) values (${username}, ${email}, ${photos}) returning *;", {
            username: admin.username,
            email: admin.email,
            photos: admin.photos
        })
    }
}