const testDB = require('../test/init');
const authFuncs = require('./authController');



describe('Integration tests', () => {
    let db;
    function clearDb() { return db.query('delete from admins') }
    beforeAll(() => {
        return testDB.initDb().then(database => {
            return db = database
        });
    });

    afterAll(() => {
        clearDb()
    })

    describe('Signup', () => {
        it('Should create user and store in the db', () => {
            const admin = {
                username: 'Sean Parmar',
                email: 'sean.parmar@yahoo.com',
                password: '12345'
            }
            return authFuncs.register(db, admin).then(createdUser => {
                expect(createdUser.length).not.toEqual(0);
                expect(createdUser[0]).toMatchObject({
                    user_id: expect.any(Number),
                    username: expect.any(String),
                    password: expect.any(String),
                    last_logged_in: expect.any(Date)
                });
            })
        })
    })
})