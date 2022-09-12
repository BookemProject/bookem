"use strict";

require("dotenv").config();
const express = require("express");
const cors = require("cors");
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
  favoriteEmails: Array,
  likes:Array,
});

const farm = mongoose.model("Farms", FarmSchema);

module.exports = farm;

//Routes :

const homeRouteHandler = require("./RoutesHandlers/homeRouteHandler"); // Working
const addFarmRouteHandler = require("./RoutesHandlers/addFarmRouteHandler"); // Working
const removeFarmRouteHandler = require("./RoutesHandlers/removeFarmRouteHandler"); // Working
const locationRouteHandler = require("./RoutesHandlers/locationRouteHandler")//  Not Working
const weatherRouteHandler = require("./RoutesHandlers/weatherRouteHandler"); // Working
const updateFarmRouteHandler = require("./RoutesHandlers/updateFarmRouteHandler"); // Working
const userFavRouteHandler = require("./RoutesHandlers/userFavRouteHandler"); // Working
const userOwnderFarmsRouteHandler = require("./RoutesHandlers/userOwnderFarmsRouteHandler"); // Working
const filterFarmRouteHandler = require("./RoutesHandlers/filterFarmRouteHandler"); // Working
const updateLikesRouteHandler = require("./RoutesHandlers/updateLikesRouteHandler")

async function seedData() {
  
  const firstFarm = new farm({
    farmName: "For Rent",
    imgURL:
      "https://c4.wallpaperflare.com/wallpaper/859/271/827/the-city-villa-pool-house-in-ibiza-wallpaper-preview.jpg",
    location: "Madaba",
    price: 200,
    description:
      "With about 270 sq. meters, on three levels, the villa, which is accessed through remote-controlled electric gates, features on the ground floor a large and bright 70 m² Living room comfortably furnished, with a baby grand piano and a flat panel TV (HD, with French channels as well as Netflix).",
    wifi: true,
    pool: true,
    parking: false,
    bedrooms: 4,
    owner: "yazanismial@gmail.com",
    available: true,
    favoriteEmails: [
      "yalfarra@outlook.com",
    
    ],
    likes:[],
    
  });
  const secondFarm = new farm({
    farmName: "For Rent",
    imgURL:
      "https://c4.wallpaperflare.com/wallpaper/859/271/827/the-city-villa-pool-house-in-ibiza-wallpaper-preview.jpg",
    location: "Mafraq",
    price: 180,
    description:
      "With about 270 sq. meters, on three levels, the villa, which is accessed through remote-controlled electric gates, features on the ground floor a large and bright 70 m² Living room comfortably furnished, with a baby grand piano and a flat panel TV (HD, with French channels as well as Netflix).",
    wifi: true,
    pool: true,
    parking: false,
    bedrooms: 5,
    owner: "basharnobeh2001@gmail.com",
    available: true,
    favoriteEmails: [
     
      "basharnobeh2001@gmail.com",
      
      "yasuobashar@gmail.com",
    ],
    likes:[],
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
app.get("/userFav", userFavRouteHandler);

// to show the filteres farms:
app.get("/filterFarm", filterFarmRouteHandler);

// home page after logging in (Ehab)
app.get("/", homeRouteHandler);

// Add email to the likes
app.put("/updateLikes/:id", updateLikesRouteHandler);


app.get("/ownedFarms" , userOwnderFarmsRouteHandler);

// Adding a new farm to the dataBase   (Noor)
app.post("/addFarm", addFarmRouteHandler);

// removing a farm from data base  (Ibraheem)
app.delete("/removeFarm/:id", removeFarmRouteHandler);

// the result of the selected city location  (Esraa)
app.get("/map", locationRouteHandler);

// the result of the selected city weather  (Morshed)
app.get("/weather", weatherRouteHandler);

// Updating the farm that's is related to the user (Email) (Yazan)
app.put("/updateFarm/:id", updateFarmRouteHandler);

// to catch any other not used routes
app.get("/*", (request, response) => {
  response.send("Error 404 , Page not found .. test ");
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
