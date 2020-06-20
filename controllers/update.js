const dbcontroller = require('../workers/db');

module.exports.controller = function(req, res){
   if(req.headers.id && req.headers.values){
      const options = {
         db: 'celeb_data',
         collection: 'stats',
         id: req.headers.id.replace(/\"/g, "").replace(/\'/g, ""),
         values: req.headers.values
      };
      
      dbcontroller.update(options)
         .then((data)=>{
            res.send(data);
         })
         .catch(
            e => console.log(e)
         );
   } else {
      res.send('Missing required instructions.')
   }
};