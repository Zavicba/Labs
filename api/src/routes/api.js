const { Router, response } = require('express');
const fetch = require('node-fetch')

const router = Router();

router.post("/", async function (req, res) {
    const { string } = req.body
    console.log('viendo que hay en la query')
    console.log(string)

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

    const respons = {
        [string] : filteredResponse
    }

    res.send(respons)
})


module.exports = router;