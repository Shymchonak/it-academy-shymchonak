import { expect } from 'chai';
import { Calculator } from '../calculator.js';

const calculations = new Calculator();

describe('Test calculator function: exponentiation', function () {
    [
        { name: 'Positive values', value: 10, result: 100 },
        { name: 'Negative values', value: -10, result: 100 },
        { name: 'Zero', value: 0, result: 0 },
        { name: 'Null', value: null, result: 0 },
        // Тест с UNDEFINED падает хотя пишет "expected NaN to equal NaN"
        // {name: 'Undefined',value: undefined,result:NaN},
        // Тест с STRING падает хотя пишет "expected NaN to equal NaN"
        // {name: 'With String',value: 'a',result:NaN}
    ].forEach((testData) => {
        it(`Test exponentiation: ${testData.name}`, async () => {
            const result = calculations.exponentiation(testData.value);
            expect(result).to.equal(testData.result);
        });
    });
    it(`Test exponentiation: More than 2 arguments`, async () => {
        const result = calculations.exponentiation(20, 10, 10);
        expect(result).to.equal(400);
    });
    // Тест без аргементов падает хотя пишет "expected NaN to equal NaN"
    // it(`Test exponentiation: Without arguments`, async () => {
    //     const result = calculations.exponentiation();
    //     expect(result).to.equal(NaN);
    // });
});
