'use strict';

const URL_LOCATIONIQ='https://eu1.locationiq.com/v1/search';
const LOCATION_KEY='pk.e6f569abb6089f922ac76a14ac4bc5e4';



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