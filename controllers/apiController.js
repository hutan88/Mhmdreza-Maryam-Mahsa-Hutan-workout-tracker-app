const axios= require("axios").default;

function getAPI(url)
{

  axios.get(url).then(r=>
    {
    
         const data = r.data;
         console.log('helia',data)
         return data
    })
}

module.exports = {getAPI}