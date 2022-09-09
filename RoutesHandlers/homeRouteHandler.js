"use strict";

const farm = require('../server');
async function homeRouteHandler (request, response){
    
    farm.find({},(err,result)=>{
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

module.exports = homeRouteHandler;