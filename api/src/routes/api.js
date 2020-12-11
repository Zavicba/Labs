const { Router, response } = require('express');
const fetch = require('node-fetch');
const NodeCache = require('node-cache');

const router = Router();

const myCache = new NodeCache({ stdTTL: 3600, checkperiod: 1800 });
const ttl = 3600;

router.post("/", async function (req, res) {
    const { string} = req.body
   
    const productCache = myCache.get(string);



    if (productCache === undefined) {

        const search = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${string}`)
            .then(response => response.json())

        const arrayResponse = []

        arrayResponse.push(search)

    

        const filteredResponse = arrayResponse[0].results.map((prod) => {

            return {
                id: prod.id,
                title: prod.title,
                price: prod.price,
                currency_id: prod.currency_id,
                available_quantity: prod.available_quantity,
                thumbnail: prod.thumbnail,
                condition: prod.condition
            }
        })
       
       
        myCache.set(string, filteredResponse, ttl)
     
        const respons = {
            [string]: filteredResponse
        }


        res.send(respons)
    } else {
        const respons = {
            [string]: productCache
        }
        res.send(respons)
    }


})


module.exports = router;