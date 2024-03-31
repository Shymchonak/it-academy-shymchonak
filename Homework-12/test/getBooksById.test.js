const axios = require('axios');
const {Validator} = require('jsonschema');
const getBooksByIdJsonSchema = require('../testData/getBooksById.v1.json')

const validator = new Validator();

const bookId = 1

describe('GET Books by ID', function(){
    let result
    beforeAll( async () => {
        result = await axios.get(`https://fakerestapi.azurewebsites.net/api/v1/Books/${bookId}`,{
            headers:{
                "accept": "text/plain; v=1.0"
            }
        })
    })
    test("GET /api/v1/Books/{id} status code should be 200", async () => {
        expect(result.status).toEqual(200)
    });
    test("GET /api/v1/Books/{id} should be valid jasonschema", async () => {
        const validationResult = await validator.validate(result.data, getBooksByIdJsonSchema);
        expect(validationResult.valid).toEqual(true)
    })


})