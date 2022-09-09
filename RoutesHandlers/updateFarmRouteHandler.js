'use strict';

async function updateFarmRouteHandler (request, response){
    const id = req.params.id;
    const {farmName,imgURL,location,price,description,wifi,pool,parking,bedrooms,ownner,available} = req.body;
    farm.findByIdAndUpdate(id, {farmName,imgURL,location,price,description,wifi,pool,parking,bedrooms,ownner,available}, (err, result) => {
        if(err){
          console.log(err);
        } else {
          farm.find({ownner:ownner},(err,result)=>{ 
            if(err){
                console.log(err);
            } else {
                res.send(result);
            }
        })
        }
      })
};

module.exports = updateFarmRouteHandler;
