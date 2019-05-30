const utilsFuncs = require('./utils');

describe('Unit test container', () => {
    describe('sum function', () => {
        it('Should be adding two numbers together', () => {
            expect(utilsFuncs.sum(3, 4)).toEqual(7)
        })
    })
    describe('phrase function', () => {
      it('Should return a string', () => {
          expect(utilsFuncs.phrase()).toBe('Danielle is the greatest')
      })     
    }) 
    describe('checkCallback function', () => {
      it('Should invoke a callback funtion with the correct string', () => {
        //declare mock function
        const cb = jest.fn();
        //invoke function we're testing passing in arguments
        utilsFuncs.checkCallback('Hello', cb)
        //write the actual test
        expect(cb).toHaveBeenCalledWith('Hello')
      })
    })

})