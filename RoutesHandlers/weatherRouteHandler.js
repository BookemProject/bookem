'use strict';


async function weatherRouteHandler(request , response){
    const CityName = request.query.city;
    const key = "61dce6b418bc49f1b3862eff26a91f11"
    const url = `https://api.weatherbit.io/v2.0/current?key=${key}&city=${CityName}`
    axios.get(url).then( result => {
        
         response.status(200).send(result.data);
    }).catch(error => {
        return response.status(404).send(error)
    })

} 


module.exports = weatherRouteHandler;