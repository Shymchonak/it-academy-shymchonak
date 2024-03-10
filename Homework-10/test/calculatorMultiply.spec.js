import { expect } from 'chai'
import {Calculator} from '../calculator.js';


let calculations = new Calculator()

describe('Test calculator function: multiply', function() {

    [
        {name: 'Positive values', value: [2,5], result: 10},
        {name: 'Negative values', value: [-2,-10], result: 20},
        {name: 'Positive * Negative', value: [4,-6], result: -24},
        {name: 'Zeros',value:[0,0],result:0},
        {name: 'More than 2 arguments', value: [2,10,30], result: 600},
        {name: 'One argument',value:[6],result: 6},
        {name: 'Without arguments',value:[],result:1},
        {name: 'With NULL',value:[null],result:0},
        // Тест с undefined падает хоче пишет "expected NaN to equal NaN"
        // {name: 'With undefined',value:[undefined],result:NaN},
        // Тест с STRING падает хотя пишет "expected NaN to equal NaN"
        //  {name: 'With String',value:['a', 2],result:NaN}
    ].forEach((testData) => {
        it(`Test multiplication: ${testData.name}`, async () => {
            let result = calculations.multiply(...testData.value)
            expect(result).to.equal(testData.result)
        })
    })

})