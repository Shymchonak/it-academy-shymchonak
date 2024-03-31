const axios = require('axios');


const bookId = 1;


describe('DELETE Books', function(){
    let result
    beforeAll( async () => {
        result = await axios.delete(`https://fakerestapi.azurewebsites.net/api/v1/Books/${bookId}`,{
            headers:{
                "accept": "*/*"
            }
        })
    })
    test("Delete /api/v1/Books status code should be 200", async () => {
        expect(result.status).toEqual(200)
    });

})