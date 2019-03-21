const sinon = require('sinon'),
    AdminData = require('./Admin'),
    testDB = require('../../test/init');

// Unit Tests
describe('Unit Tests', () => {
    describe('Get admin data', () => {
        it('Should fetch admin data from the db', () => {
            const fakeDB = {
                query: sinon.mock().withArgs(
                    "select * from admins where id=1"
                )
            }
            return AdminData.getAdmin(fakeDB)
        })
    })
    describe('Create admin', () => {
        it('Should send admin data to the db', () => {
            const admin = {
                username: 'Sean Parmar',
                email: 'sean.parmar@yahoo.com',
                photo: 'https://s3.amazonaws.com/michaelkerr-projectmedia/BZQJlHb.jpg'
            }
            const fakeDB = {
                query: sinon.mock().withArgs(
                    "insert into admins(username, email, photo) values (${username}, ${email}, ${photo}) returning *;",
                    sinon.match({
                        username: admin.username,
                        email: admin.email,
                        photo: admin.photo,
                        created_at: sinon.match.date
                    })
                )
            }
            return AdminData.createAdmin(fakeDB, admin)
        })
    })
})

// Integration Tests
describe('Integration Tests', () => {
    let db;
    function clearDb() { return db.query('delete from admins') }
    beforeAll(() => {
        return testDB.initDb().then(database => {
            return db = database
        });
    });

    beforeEach(() => {
        return clearDb();
    });

    // describe('Get Admin', () => {
    //     it('Should get admin data from db', () => {
    //         return AdminData.getAdmin(db).then(admin => {
    //             expect(admin.length).not.toEqual(0);
    //             expect(admin[0]).toMatchObject({
    //                 id: expect.any(Number),
    //                 username: expect.any(String),
    //                 email: expect.any(String),
    //                 photo: expect.any(String),
    //                 created_at: expect.any(Date)
    //             });
    //         })
    //     })
    // })
    describe('Create Admin', () => {
        it('Should create an admin in db', () => {
            const admin = {
                username: 'Sean Parmar',
                email: 'sean.parmar@yahoo.com',
                photo: 'https://s3.amazonaws.com/michaelkerr-projectmedia/BZQJlHb.jpg'
            }
            return AdminData.createAdmin(db, admin).then(createdAdmin => {
                expect(createdAdmin.length).not.toEqual(0);
                expect(createdAdmin[0]).toMatchObject({
                    id: expect.any(Number),
                    username: expect.any(String),
                    email: expect.any(String),
                    photo: expect.any(String),
                    created_at: expect.any(Date)
                });
            })
        })
    })

})