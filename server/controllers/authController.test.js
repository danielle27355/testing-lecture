const authFuncs = require('./authController');
const testDB = require('../test/init');

describe('Integration Tests', () => {

    //declare out db variable
    let db;
    //declare & define clearDB function
    function clearDB(){
        return db.query('delete from users')
    }

    //runs before all of our tests
    beforeAll(() => {
        return testDB.initDb().then(database => {
            return db = database;
        }) 
    })
    //runs after all of our tests
    afterAll(() => {
        clearDB()
    })

    describe('Register function', () => {
        it('Should store a user in the db & send it up', () => {
            const user = {
                username: 'Sean Parmesan',
                password: '12345'
            }
            return authFuncs.register(db, user).then(createdUser => {
                expect(createdUser.length).not.toEqual(0);
                expect(createdUser[0]).toMatchObject({
                    user_id: expect.any(Number),
                    username: expect.any(String),
                    password: expect.any(String),
                    last_logged_in: expect.any(Date)
                })
            })
        })
    })
})