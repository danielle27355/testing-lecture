const sinon = require('sinon');
const testFuncs = require('./testFuncs')
const axios = require('axios');

describe('Unit Tests', () => {

    describe('Login function', () => {
      it('Should send a username & password', () => {
          //sinon.stub(object, "method")
          sinon.stub(axios, "post").withArgs(
              sinon.match({
                  username: expect.any(String),
                  pasword: expect.any(String)
              })
          )
          return testFuncs.testLogin('Sean Parmesan', 8279398719)
      })
      //runs after each test
      afterEach(() => {
        //unwrap a stub - object.method.restore()
        axios.post.restore()
      })
    })
    

})