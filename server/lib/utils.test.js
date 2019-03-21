const utils = require('./utils');
const axios = require('axios');
const sinon = require('sinon');

describe('utils', () => {
    describe('function1', () => {
        it('returns 2', () => {
            expect(utils.function1(2, 4)).toEqual(6)
        })
    }),
        describe('function 2', () => {
            it('returns Sean is the greatest', () => {
                expect(utils.function2()).toEqual('Sean is the greatest')
            })
            it('does not return Sean is not the greatest', () => {
                expect(utils.function2()).not.toBe('Sean is not the greatest')
            })
        }),
        describe('func3', () => {
            it('calls callback', () => {
                const cb = jest.fn()
                utils.func3('hello', cb)
                expect(cb).toHaveBeenCalledWith('hello')
            })
        }),
        describe('getInternetData', () => {
            it('returns an array of people', () => {
                // Stubs fake functionality so our system believes everything is working.  Not actually hitting server
                sinon.stub(axios, 'get').returns(Promise.resolve({
                    data: {
                        results: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
                    }
                }))
                return utils.getInternetData().then(people => {
                    // console.log(people);

                    expect(people.length).toEqual(10)
                })
            })
        })
})