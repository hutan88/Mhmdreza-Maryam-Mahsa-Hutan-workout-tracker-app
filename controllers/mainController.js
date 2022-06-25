const axios= require("axios").default;

function getAPI()
{
    const url="https://api.publicapis.org/entries";

axios.get(url).then(r=>
    {
        console.log(r.data);
    })
}


    module.exports = {getAPI}