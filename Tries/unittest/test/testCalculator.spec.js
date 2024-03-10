import { expect } from 'chai'
import {greet} from "../testData.js";

describe('our new test Claculator', function () {


    before( async () => {
        console.log('Before Claculator')
    })

    after( async() => {
        console.log('After Claculator')
    })

    beforeEach(async ()=> {
        console.log('Before each Claculator')
    })
    afterEach(async() => {
        console.log('After each Claculator')
    })


    it('should 10 equal 10 Claculator', async() => {
        expect(10).to.equal(10)
    })
    it('should return "Hello Dasha" if attribute not pass in function Claculator', async() =>{
        const result = greet();
        expect(result).to.equal('Hello Dasha')
    })
    it('should return "Hello Igor" if attribute not pass in function Claculator', async() =>{
        const result = greet('Igor');
        expect(result).to.equal('Hello Igor')
    })
})