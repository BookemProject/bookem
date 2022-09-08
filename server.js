'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
app.use(cors());
app.use(express.json())

//Please don't forget to export your class after finishing it so I can require it. 
const homeRouteHandler = require('./RoutesHandlers/homeRouteHandler');
const addFarmRouteHandler = require('./RoutesHandlers/addFarmRouteHandler');
const removeFarmRouteHandler = require('./RoutesHandlers/removeFarmRouteHandler');
const locationRouteHandler = require('./RoutesHandlers/locationRouteHandler');
const weatherRouteHandler = require('./RoutesHandlers/weatherRouteHandler');
const updateFarmRouteHandler = require('./RoutesHandlers/updateFarmRouteHandler');


//Don't edit these lines please :
mongoose.connect(`${this.process.MONGOOSE}`, {useNewUrlParser :true,
useUnifiedTopology:true });



const PORT = process.env.PORT || 3001;

const FarmSchema = new mongoose.Schema({
    farmName:String,
    imgURL :String,
    location : String,
    Price :Number,
    description:String,
    wifi:Boolean,
    pool:Boolean,
    parking:Boolean,
    bedrooms :Number,
    ownner : String,
    available:Boolean,
    
});


const UserSchema = new mongoose.Schema({
    email:String,
    fav :[FarmSchema],
    
});

const farm = mongoose.model('Farms', FarmSchema);

//Just to test if the server is working ..
app.get('/test', (request, response) => {
  response.send('test request received')
})


// home page after logging in (Ehab)
app.get('/', homeRouteHandler);  


// Adding a new farm to the dataBase   (Noor)
app.post('/addFarm', addFarmRouteHandler ); 

 
// removing a farm from data base  (Ibraheem)
app.delete('/removeFarm/:id', removeFarmRouteHandler); 


// the result of the selected city location  (Esraa)
app.get('/location', locationRouteHandler);


// the result of the selected city weather  (Morshed)
app.get('/weather', weatherRouteHandler);


// Updating the farm that's is related to the user (Email) (Yazan)
app.put('/updateFarm', updateFarmRouteHandler); 


// to catch any other not used routes  
app.get('*', (request,response)=>{
    response.send("Error 404 , Page not found .. ");
} ); 



app.listen(PORT, () => console.log(`listening on ${PORT}`));
