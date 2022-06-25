const axios= require("axios").default;

function getAPIShampoo(req,res)
{
    const url="https://c6e1-83-122-86-59.eu.ngrok.io/api/ourgym";

axios.get(url).then(r=>
    {
        console.log('check axios',r.data);
        const data = r.data;
        res.render('shapoo.twig',{data})
    })
}

function getAPIPump(req,res)
{
    const url="https://c6e1-83-122-86-59.eu.ngrok.io/api/ourgym";

axios.get(url).then(r=>
    {
        console.log('check axios',r.data);
        const data = r.data;
        res.render('pumpHouse.twig',{data})
    })
}


    module.exports = {getAPIShampoo,getAPIPump}