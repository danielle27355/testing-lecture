const utils = require('./utils');
const axios = require('axios');
const sinon = require('sinon');

describe('utils', () => {
    describe('function1', () => {
        it('returns 2', () => {
            expect(utils.function1()).toEqual(2)
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
                sinon.stub(axios, 'get').returns(Promise.resolve({
                    data: {
                        results: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
                    }
                }))
                return utils.getInternetData().then(people => {
                    expect(people.length).toEqual(10)
                })
            })
        })
})