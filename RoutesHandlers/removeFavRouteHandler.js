'use strict';

const farm = require('../server');
async function removeEmailFavRouteHandler (request, response){
    const id = request.params.id;
    const {farmName,imgURL,location,price,description,wifi,pool,parking,bedrooms,owner,available,favoriteEmails,likes} = request.body;
    farm.findByIdAndUpdate(id, {farmName,imgURL,location,price,description,wifi,pool,parking,bedrooms,owner,available,favoriteEmails,likes}, (err, result) => {
        if(err){
          console.log(err);
        } 
      })
};

module.exports = removeEmailFavRouteHandler;