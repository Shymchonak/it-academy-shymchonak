const axios = require('axios');
const {Validator} = require('jsonschema');
const postJsonSchema = require('../apiTestData/postreview.json')

const validator = new Validator();

describe('POST review for products', function(){
    let result
    beforeAll( async () => {
        result = await axios.post('https://5element.by/ajax/feedback_product_save.php',{"UF_RATING":5,
            "UF_EMAIL":"hsdfsfsf33@gmail.com",
            "UF_FULL_NAME":"Hleb",
            "UF_LOCATION":"Минск",
            "UF_TEXT_PLUS":"",
            "UF_TEXT_MINUS":"",
            "UF_TEXT_RESUME":"окей"
            ,"UF_PRODUCT_ID":"789852",
            "UF_PRODUCT_XML_ID":"good_f7f5684e-6e5f-11ee-8db3-005056012b6d",
            "CURRENT_PAGE":"1",
            "UF_PAGE_URL":"https://5element.by/products/789852-televizor-tcl-32fhd7900/reviews",
            "submit":"save"},{
            headers:{
                "accept": "application/json, text/plain, */*",
                "Content-Type": "application/json;charset=UTF-8"
            }
        })
    })
    test("POST /ajax/feedback_product_save status code should be 200", async () => {
        expect(result.status).toEqual(200)
    });
    test("POST /ajax/feedback_product_save should be valid jasonschema", async () => {
        const validationResult = await validator.validate(result.data, postJsonSchema);
        expect(validationResult.valid).toEqual(true)
    })
    test("POST /ajax/feedback_product_save 'Вы робот?' should be in message", async () => {
        expect(result.data.errors).toEqual({"CAPTCHA": "Вы робот?"})
    });

})