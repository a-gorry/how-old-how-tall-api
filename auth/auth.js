const keys = require('./keys.js');

const auth = (req, res, next) => {
    const api_key = req.headers.authorization;
    if(keys.includes(api_key)){
        next()
    } else {
        res.send('Access Denied...');
    }
};

module.exports = auth;