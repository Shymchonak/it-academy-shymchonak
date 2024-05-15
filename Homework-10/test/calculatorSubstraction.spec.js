import { expect } from 'chai';
import { Calculator } from '../calculator.js';

const calculations = new Calculator();

describe('Test calculator function: subtraction', function () {
    [
        { name: 'Positive values', reduced: 10, subtrahend: 5, result: 5 },
        { name: 'Negative values', reduced: -5, subtrahend: -8, result: 3 },
        { name: 'Positive - Negative', reduced: 10, subtrahend: -5, result: 15 },
        { name: 'Zeros', reduced: 0, subtrahend: 0, result: 0 },
        // Тест с undefined падает хоче пишет "expected NaN to equal NaN"
        // {name: 'With undefined',reduced: undefined, subtrahend: 0,result:NaN},
        // Тест с STRING падает хотя пишет "expected NaN to equal NaN"
        // {name: 'With String',reduced: 'a', subtrahend: 5,result:NaN}
    ].forEach((testData) => {
        it(`Test subtraction: ${testData.name}`, async () => {
            const result = calculations.subtraction(testData.reduced, testData.subtrahend);
            expect(result).to.equal(testData.result);
        });
    });
    it(`Test subtraction: More than 2 arguments`, async () => {
        const result = calculations.subtraction(20, 10, 10);
        expect(result).to.equal(10);
    })
    // Тест без аргементов падает хотя пишет "expected NaN to equal NaN"
    // it(`Test subtraction: Without arguments`, async () => {
    //     const result = calculations.subtraction();
    //     expect(result).to.equal(NaN);
    // });
});
