"use strict";

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const app = express();
app.use(cors());
app.use(express.json());







//Don't edit these lines please :
mongoose.connect(
  "mongodb://Team:1234@ac-algan1f-shard-00-00.0jtg6ig.mongodb.net:27017,ac-algan1f-shard-00-01.0jtg6ig.mongodb.net:27017,ac-algan1f-shard-00-02.0jtg6ig.mongodb.net:27017/?ssl=true&replicaSet=atlas-bnb353-shard-0&authSource=admin&retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const PORT = process.env.PORT || 3001;

const FarmSchema = new mongoose.Schema({
  farmName: String,
  imgURL: String,
  location: String,
  price: Number,
  description: String,
  wifi: Boolean,
  pool: Boolean,
  parking: Boolean,
  bedrooms: Number,
  owner: String,
  available: Boolean,
  favoriteEmails:Array,

});



const farm = mongoose.model("Farms", FarmSchema);

module.exports = farm;



//Routes : 

const homeRouteHandler = require("./RoutesHandlers/homeRouteHandler"); // Working 
const addFarmRouteHandler = require("./RoutesHandlers/addFarmRouteHandler"); // Working 
const removeFarmRouteHandler = require("./RoutesHandlers/removeFarmRouteHandler"); // Working 
// const locationRouteHandler = require("./RoutesHandlers/locationRouteHandler")//  Not Working 
const weatherRouteHandler = require("./RoutesHandlers/weatherRouteHandler"); // Working 
const updateFarmRouteHandler = require("./RoutesHandlers/updateFarmRouteHandler"); // Working 
const userFavRouteHandler = require("./RoutesHandlers/userFavRouteHandler"); // Working 

async function seedData() {



  const firstFarm = new farm({
    farmName: "test",
    imgURL: "test",
    location: "test",
    price: 1000,
    description: "test",
    wifi: true,
    pool: true,
    parking: false,
    bedrooms: 2,
    ownner: "Bashar",
    available: true,
    favoriteEmails:["Yazan@gmail.com" , "ehab@gmail.com" ,"AliMOha@gmail.com"]
  });
  const secondFarm = new farm({
    farmName: "test2",
    imgURL: "test2",
    location: "test2",
    price: 2000,
    description: "test2",
    wifi: true,
    pool: true,
    parking: false,
    bedrooms: 2,
    ownner: "Bashar2",
    available: true,
    favoriteEmails : ["Yazan@gmail.com" , "basharnobeh2001@gmail.com"]
  });

 

  await firstFarm.save();
  await secondFarm.save();
 
}
// seedData();




//Just to test if the server is working ..
app.get("/test", (request, response) => {
  response.send("test request received");
});


// to show the fav farms related to the user : 
app.get("/userFav" , userFavRouteHandler);

// home page after logging in (Ehab)
app.get("/", homeRouteHandler);

// Adding a new farm to the dataBase   (Noor)
app.post("/addFarm", addFarmRouteHandler);

// removing a farm from data base  (Ibraheem)
app.delete("/removeFarm/:id", removeFarmRouteHandler);

// the result of the selected city location  (Esraa)
// app.get("/location", locationRouteHandler);

// the result of the selected city weather  (Morshed)
app.get("/weather", weatherRouteHandler);

// Updating the farm that's is related to the user (Email) (Yazan)
app.put("/updateFarm/:id", updateFarmRouteHandler);

// to catch any other not used routes
app.get("/*", (request, response) => {
  response.send("Error 404 , Page not found .. test ");
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));



