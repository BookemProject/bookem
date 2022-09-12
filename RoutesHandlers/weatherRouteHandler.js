'use strict';


async function weatherRouteHandler(request , response){

    const WEATHER_KEY='f17b33956c554c1b985234920223008'
    const URL_WEATHER='https://api.weatherapi.com/v1/forecast.json';
    const CityName = request.query.city;
    const Date = request.query.date;
    
   
   await axios.get(`${URL_WEATHER}?key=${WEATHER_KEY}&q=${CityName}&days=1&dt=${Date}`)
    .then(result=>{
        const weatherData=result.data.forecast.forecastday[0].day;
        response.send(weatherData)
        

     } )
     .catch(err=>{

        console.log(err)
    })
    
    } 


module.exports = weatherRouteHandler;