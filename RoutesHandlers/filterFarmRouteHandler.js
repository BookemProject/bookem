"use strict";

const farm = require('../server');
async function filterFarmRouteHandler (request, response){
    
    const farmLocation = request.query.location;
    farm.find({location:farmLocation},(err,result)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {   
           return  response.send(result);
        }
    })
};

module.exports = filterFarmRouteHandler;