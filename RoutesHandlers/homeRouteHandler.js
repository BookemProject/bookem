"use strict";
async function homeRouteHandler (request, response){
    
    farm.find({},(err,result)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {   
            response.send(result);
        }
    })
};

module.exports = homeRouteHandler;