
const axios = require('axios');
const {Validator} = require('jsonschema');
const putBooksJsonSchema = require('../testData/putBooks.v1.json')

const bookId = 1;
const validator = new Validator();

describe('PUT Books', function(){
    let result
    beforeAll( async () => {
        result = await axios.put(`https://fakerestapi.azurewebsites.net/api/v1/Books/${bookId}`,{
            "id": 1,
            "title": "string",
            "description": "string",
            "pageCount": 0,
            "excerpt": "string",
            "publishDate": "2024-03-31T13:31:19.515Z"
        },{
            headers:{
                "accept": "*/*",
                "Content-Type": "application/json; v=1.0"
            }
        })
    })
    test("PUT /api/v1/Books status code should be 200", async () => {
        expect(result.status).toEqual(200)
    });
    test("PUT /api/v1/Books should be valid jasonschema", async () => {
        const validationResult = await validator.validate(result.data, putBooksJsonSchema);
        expect(validationResult.valid).toEqual(true)
    });
    test("PUT /api/v1/Books Title is changed", async () => {
        expect(result.data.title).toEqual(`string`)
    });

})
