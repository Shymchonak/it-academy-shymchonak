
const axios = require('axios');
const {Validator} = require('jsonschema');
const postBooksJsonSchema = require('../testData/postBooks.v1.json')

const validator = new Validator();

describe('POST Books', function(){
    let result
    beforeAll( async () => {
        result = await axios.post('https://fakerestapi.azurewebsites.net/api/v1/Books',{
            "id": 100,
            "title": "Mybook",
            "description": "Somewords",
            "pageCount": 0,
            "excerpt": "string",
            "publishDate": "2024-03-31T13:21:28.018Z"
        },{
            headers:{
                "accept": "*/*",
                "Content-Type": "application/json; v=1.0"
            }
        })
    })
    test("POST /api/v1/Books status code should be 200", async () => {
        expect(result.status).toEqual(200)
    });
    test("POST /api/v1/Books should be valid jasonschema", async () => {
        const validationResult = await validator.validate(result.data, postBooksJsonSchema);
        expect(validationResult.valid).toEqual(true)
    })
    test("POST /api/v1/Books Title is changed", async () => {
        expect(result.data.title).toEqual(`Mybook`)
    });

})
