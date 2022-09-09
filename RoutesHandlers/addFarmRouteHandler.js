'use srtict';

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
        ownner ,
        available,
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
        ownner:ownner ,
        available:available,
    });


}

module.exports = addFarmRouteHandler;