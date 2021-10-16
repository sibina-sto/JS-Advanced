let assert = require('chai').assert;
let { numberOperations } = require('./solution')

describe("Test", () => {
    it('powNumber', () => {
        assert.equal(numberOperations.powNumber(3), 9)
    })

    it('numberChecker', () => {
        assert.throw(() => numberOperations.numberChecker('true'), 'The input is not a number!')
        assert.equal(numberOperations.numberChecker(5), 'The number is lower than 100!')
        assert.equal(numberOperations.numberChecker(100), 'The number is greater or equal to 100!')
        assert.equal(numberOperations.numberChecker(105), 'The number is greater or equal to 100!')
    })

    it('sumArrays', () => {
        assert.deepEqual(numberOperations.sumArrays([1, 3, 5], [4, 6, 7]), [5, 9, 12])
        assert.deepEqual(numberOperations.sumArrays([1, 3], [4, 6, 7]), [5, 9, 7])
    })
})
