'use strict';

const URL_LOCATIONIQ='https://eu1.locationiq.com/v1/search';
const LOCATION_KEY=process.env.LOCATIONKEY;
const  axios =require ('axios');



async function locationRouteHandler(req,res){


    const cityname=req.query.city


    await axios.get(`${URL_LOCATIONIQ}?key=${LOCATION_KEY}&q=${cityname}&format=json`).then(result=>{

       let locationData=result.data[0];

       res.send(locationData)

    }) 
    .catch(err=>{

        console.log(err)
    })


}

module.exports = locationRouteHandler;