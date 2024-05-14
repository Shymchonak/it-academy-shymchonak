const axios = require('axios');
const {Validator} = require('jsonschema');
const postJsonSchema = require('../apiTestData/invalidLogin.v1.json')

const validator = new Validator();

describe.skip('POST invalidLogin', function(){
    let result
    beforeAll( async () => {
        result = await axios.post('https://5element.by/user/login',{
            "login":"sdf",
            "password":"sdfdsfs",
            "type":"auth_psw"
        },{
            headers:{
                "accept": "application/json, text/plain, */*",
                "Content-Type": "application/json;charset=UTF-8"
            }
        })
    })
    test("POST /user/login status code should be 200", async () => {
        expect(result.status).toEqual(200)
    });
    test("POST /user/login should be valid jasonschema", async () => {
        const validationResult = await validator.validate(result.data, postJsonSchema);
        expect(validationResult.valid).toEqual(true)
    })
    test("POST /user/login 'Некорректный ввод' should be in message", async () => {
        expect(result.data.message).toEqual(`Некорректный ввод`)
    });

})