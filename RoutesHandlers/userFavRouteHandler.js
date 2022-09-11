"use strict";

const farm = require('../server');
async function userFavRouteHandler (request, response){
    const wantedEmail  = request.query.email;
    const farms = [];
    farm.find({},(err,result)=>{ 
        if(err){
            console.log(err);
        } else {
            result.map(item =>{
                if(item.owner==wantedEmail){
                    farms.push(item);

                }
            })

            response.send(farms)

         return ;
        }
    })
 


};

module.exports = userFavRouteHandler;