'use srtict';
async function homeRouteHandler (request, response){
    
    book.find({},(err,result)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {   
            response.send(result);
        }
    })
};

module.exports = homeRouteHandler;