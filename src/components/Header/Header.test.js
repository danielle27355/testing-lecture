const sinon = require('sinon');
let testFuncs = require('./testFunctions');
const axios = require('axios');

describe('Unit Tests', () => {

    // Sign up
    describe('Signup', () => {
        it('Should send a username, email, & password', () => {
            // sinon.stub(object, "method");
            sinon.stub(axios, 'post').withArgs(
                sinon.match({
                    username: expect.any(String),
                    email: expect.any(String),
                    password: expect.any(String)
                })
            )
            return testFuncs.unitTestSignup('Sean Parmesan', 'sean@sean.com', '12345')
        })
        // Runs after test
        afterEach(() => {
            // Unwraps the spy
            axios.post.restore()
        })
    })

    // Login
    describe('Login', () => {
        it('Should send a username & password', () => {
            // sinon.stub(object, "method");
            sinon.stub(axios, 'post').withArgs(
                sinon.match({
                    username: expect.any(String),
                    password: expect.any(String)
                })
            )
            return testFuncs.unitTestLogin('Sean Parmesan', '12345')
        });
        // Runs after test
        afterEach(() => {
            // Unwraps the spy
            axios.post.restore()
        })
    });


});
