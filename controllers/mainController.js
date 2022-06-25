const axios= require("axios").default;

function getAPIShampoo(req,res)
{
    const url="https://c3d1-151-240-107-26.eu.ngrok.io/api/ourgym";

axios.get(url).then(r=>
    {
        console.log('check axios',r.data);
        const otherGymData = r.data;
        res.render('shapoo.twig',{otherGymData})
    })
}

function getAPIPump(req,res)
{
const url="https://c6e1-83-122-86-59.eu.ngrok.io/api/ourgym";

axios.get(url).then(r=>
    {
        console.log('check axios',r.data);
        const otherGymData = r.data;
        res.render('pumpHouse.twig',{otherGymData})
    })
}


    module.exports = {getAPIShampoo,getAPIPump}