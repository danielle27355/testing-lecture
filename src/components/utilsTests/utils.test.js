const utilsFuncs = require('./utils');
// Expect docs: https://jestjs.io/docs/en/expect.html
describe('Utils Functions', () => {

    describe('sum function', () => {
        it('Should add two numbers together', () => {
            expect(utilsFuncs.sum(3, 4)).toEqual(7);
        })
    })

    describe('phrase function', () => {
        it('Should return a string', () => {
            expect(utilsFuncs.phrase()).toBe('Sean is the greatest')
        });
        it('Should not return a number', () => {
            expect(utilsFuncs.phrase()).not.toBe(Number)
        })
    })

    describe('cb function', () => {
        it('Should invoke callback with the proper arguement', () => {
            // jest.fn() creates a mock function - returns undefined with no implmentation  which is fine since all we care about is whether it's called with the string not what it does with it.
            // https://jestjs.io/docs/en/mock-function-api
            const cb = jest.fn()
                utilsFuncs.checkCallback('hello', cb)
                expect(cb).toHaveBeenCalledWith('hello')
        })
    })
})