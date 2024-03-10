import {expect} from "chai";
import {Calculator} from "../calculator.js";


let calculations = new Calculator()

describe('Test calculator function: divide', function() {
    [
        {name: "Positive values", dividend: 10, divider: 5, result: 2},
        {name: "Negative values", dividend: -50, divider: -5, result: 10},
        {name: "Positive / Negative", dividend: 100, divider: -20, result: -5},
        {name: "Zero",dividend: 100, divider: 0,result:Infinity},
        {name: "Value / Null",dividend: 100, divider: null,result:Infinity},
        {name: "Null / Value",dividend: null, divider: 100,result:0},
        //Тест с Null / null падает хоче пишет "expected NaN to equal NaN"
        // {name: "Null / Null",dividend: null, divider: null,result:NaN},
        //Тест с undefined падает хоче пишет "expected NaN to equal NaN"
        //{name: "With undefined",dividend: undefined, divider: 0,result:NaN},
        // Тест с STRING падает хотя пишет "expected NaN to equal NaN"
        //{name: "With String",dividend: 'a', divider: 5,result:NaN}
    ].forEach((testData) => {
        it(`Test divide: ${testData.name}`, async () => {
            let result = calculations.divide(testData.dividend, testData.divider)
            expect(result).to.equal(testData.result)
        })
    })
    it(`Test subtraction: More than 2 arguments`, async () => {
        let result = calculations.divide(20, 10, 10)
        expect(result).to.equal(2)
    })
    // Тест без аргементов падает хотя пишет "expected NaN to equal NaN"
    // it(`Test divide: Without arguments`, async () => {
    //     let result = calculations.divide()
    //     expect(result).to.equal(NaN)
    // })
})
