const dbcontroller = require('../workers/db.js');

module.exports.controller = function(req, res){

   if(req.headers.id){
      const options = {
         db: 'celeb_data',
         collection: 'stats',
         id: req.headers.id.replace(/\"/g, "").replace(/\'/g, "")
      };
   
      dbcontroller.delete(options).then(
         (data)=>{
            res.send(data);
         }).catch(
            e => console.log(e)
         );

   } else {
      res.send('No delete ID.')
   }

}