const testNumbers = {
    sumNumbers: function (num1, num2) {
        let sum = 0;

        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        } else {
            sum = (num1 + num2).toFixed(2);
            return sum
        }
    },
    numberChecker: function (input) {
        input = Number(input);

        if (isNaN(input)) {
            throw new Error('The input is not a number!');
        }

        if (input % 2 === 0) {
            return 'The number is even!';
        } else {
            return 'The number is odd!';
        }

    },
    averageSumArray: function (arr) {

        let arraySum = 0;

        for (let i = 0; i < arr.length; i++) {
            arraySum += arr[i]
        }

        return arraySum / arr.length
    }
};

let assert = require('chai').assert;

describe('Test testNumbers functionallity()', () => {

    describe('Test sumNumbers', () => {

        it('Should return sum of two passed numbers', () => {
            let num1 = 1;
            let num2 = 2;

            let expectedResult = 3;

            let actualResult = testNumbers.sumNumbers(num1, num2);

            assert.equal(actualResult, expectedResult);
        });

        it('Should return undefined when passed arguments are not a numbers', () => {
            let num1 = 'a';
            let num2 = 'b';

            let expectedResult = undefined;

            let actualResult = testNumbers.sumNumbers(num1, num2);

            assert.equal(actualResult, expectedResult);
        });

        it('Should return undefined when first passed argument is not a number', () => {
            let num1 = 'a';
            let num2 = 2;

            let expectedResult = undefined;

            let actualResult = testNumbers.sumNumbers(num1, num2);

            assert.equal(actualResult, expectedResult);
        });

        it('Should return undefined when second passed argument is not a number', () => {
            let num1 = 1;
            let num2 = 'b';

            let expectedResult = undefined;

            let actualResult = testNumbers.sumNumbers(num1, num2);

            assert.equal(actualResult, expectedResult);
        });

        it('Should return formatted to second decimal number', () => {
            let num1 = 1;
            let num2 = 2;

            let expectedResult = 3.00;

            let actualResult = testNumbers.sumNumbers(num1, num2);

            assert.equal(actualResult, expectedResult);
        });
    });

    describe('Test numberChecker', () => {

        it('Should return if number is even when even number is passed as argumebt', () => {
            let num = 2;

            let expectedResult = 'The number is even!';

            let actualResult = testNumbers.numberChecker(num);

            assert.equal(actualResult, expectedResult);
        });

        it('Should return if number is odd when odd number is passed as argumebt', () => {
            let num = 1;

            let expectedResult = 'The number is odd!';

            let actualResult = testNumbers.numberChecker(num);

            assert.equal(actualResult, expectedResult);
        });

        it('Should throw error if non number is passed as argument', () => {
            let num = 'a';

            let expectedResult = 'The input is not a number!';

            assert.throws(() => new testNumbers.numberChecker(num), expectedResult);
        });

        it('Should parse number provided', () => {
            let num = '1';

            let expectedResult = 'The number is odd!';

            let actualResult = testNumbers.numberChecker(num);

            assert.equal(actualResult, expectedResult);
        });

    });

    describe('Test averageSumArray', () => {

        it('Should return avg sum of array when array argument is provided', () => {
            let array = [1, 2, 3];

            let expectedResult = 2;

            let actualResult = testNumbers.averageSumArray(array);

            assert.equal(actualResult, expectedResult);
        });
    });
});
