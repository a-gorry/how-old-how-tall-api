const dbcontroller = require('../workers/db.js');

module.exports.controller = function(req, res){
   
   if(req.body.records){
      const records = req.body.records.replace('[','').replace(']','').split(',');

      const formatted_records = records.map((record) => {
         return JSON.parse(record);
      });

      const options = {
         db: 'celeb_data',
         collection: 'stats',
         records: formatted_records
      };
   
      dbcontroller.create(options).then(
         (data)=>{
            res.send(data);
         }).catch(
            e => console.log(e)
         );

   } else {
      res.send('No record to add.')
   }

}