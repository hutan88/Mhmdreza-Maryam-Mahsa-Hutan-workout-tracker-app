const { createHash } = require('crypto')

// ============= Hash Pass =========

function hashPass(pass)
{
    
const hash = createHash('sha256')

return hash.update(pass).digest('hex');

}

// ============= Hash ID =========

function hashID(id)
{
const hash = createHash('sha256')

return hash.update(id).digest('hex');

}

module.exports= {hashPass,hashID}
