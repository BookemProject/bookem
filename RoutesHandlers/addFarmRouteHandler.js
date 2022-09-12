'use strict';

const farm = require('../server');
async function addFarmRouteHandler(request,response){
    const {
        farmName,
        imgURL,
        location ,
        price ,
        description,
        wifi,
        pool,
        parking,
        bedrooms ,
        owner ,
        available,
        favoriteEmails,
        likes
    } = request.body;

    await farm.create({
        farmName:farmName ,
        imgURL:imgURL,
        location:location ,
        price:price ,
        description:description,
        wifi:wifi,
        pool:pool,
        parking:parking,
        bedrooms:bedrooms ,
        owner:owner ,
        available:available,
        favoriteEmails:favoriteEmails,
        likes:likes
    });

    if(request.query.email == 'undefined'){
        farm.find({},(err,result)=>{
            if(err)
            {
                console.log(err);
            }
            else
            {
                // console.log(result);
                response.send(result);
            }
        })

    }else {
        farm.find({owner:owner},(err,result)=>{
            if(err)
            {
                console.log(err);
            }
            else
            {
                // console.log(result);
                response.send(result);
            }
        })
    }
}

module.exports = addFarmRouteHandler;