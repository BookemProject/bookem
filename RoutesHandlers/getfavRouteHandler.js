"use strict";

const farm = require('../server');

async function getfavRouteHandler (request, response){
    const wantedEmail  = request.query.email;
    const favFarms = [];
    farm.find({},(err,result)=>{ 
        if(err){
            console.log(err);
        } else {
            result.map(item =>{
                item.likes.map(i => {
                    if(i===wantedEmail){
                        favFarms.push(item);
                    }
                })
            })
         return response.send(favFarms) ;
        }
    })
};

module.exports = getfavRouteHandler;
