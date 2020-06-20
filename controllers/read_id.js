const dbcontroller = require('../workers/db');

module.exports.controller = function(req, res){

   const options = {
      db: 'celeb_data',
      collection: 'stats',
      id: req.headers.id.replace(/\"/g, "").replace(/\'/g, "")
   };

   dbcontroller.read_id(options)
      .then((data)=>{
         res.send(data);
      })
      .catch(
         e => console.log(e)
      );
}