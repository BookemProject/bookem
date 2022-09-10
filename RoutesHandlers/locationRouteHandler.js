'use strict';

async function locationRouteHandler(request , response){
    const CityName = request.query.city;
    const key = "pk.52ffa2b140346333af8917296b40c4cb"
    const linkLocaiton = `https://us1.locationiq.com/v1/search?key=${key}&q=${CityName}&format=json`
    axios.get(linkLocaiton).then( result => {
        
         response.status(200).send(result.data);
    }).catch(error => {
        return response.status(404).send(error)
    })

} 


module.exports = locationRouteHandler;