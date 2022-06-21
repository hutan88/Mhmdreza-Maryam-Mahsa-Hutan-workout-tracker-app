let varGlobal = {};

module.exports = {
    setVarGlobal: (key,value)=>
    {
        varGlobal[key] = value;
    },
    getVarGlobal: (key)=>
    {
        return varGlobal[key];
    }
}