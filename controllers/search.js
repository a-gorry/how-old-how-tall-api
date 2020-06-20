const dbcontroller = require('../workers/db');

module.exports.controller = function(req, res){

   const options = {
      db: 'celeb_data',
      collection: 'stats',
      query: req.headers.query || {},
      limit: req.headers.limit || 5000
   };

   dbcontroller.search(options)
      .then((data)=>{
         res.send(data);
      })
      .catch(
         e => console.log(e)
      );
}