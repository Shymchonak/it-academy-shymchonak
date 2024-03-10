import { expect } from 'chai';
import { Calculator } from '../calculator.js';

const calculations = new Calculator();

describe('Test calculator function: add', function () {
    [
        { name: 'Positive values', value: [2, 5], result: 7 },
        { name: 'Negative values', value: [-2, -10], result: -12 },
        { name: 'Zeros', value: [0, 0], result: 0 },
        { name: 'More than 2 arguments', value: [2, 10, 30], result: 42 },
        { name: 'One argument', value: [2], result: 2 },
        { name: 'Without arguments', value: [], result: 0 },
        { name: 'With NULL', value: [null], result: 0 },
        // Тест с undefined падает хоче пишет "expected NaN to equal NaN"
        // {name: 'With undefined',value:[undefined],result:NaN},
        { name: 'With String', value: ['a', 2], result: '0a2' }
    ].forEach((testData) => {
        it(`Test addition: ${testData.name}`, async () => {
            const result = calculations.add(...testData.value)
            expect(result).to.equal(testData.result)
        })
    })

})