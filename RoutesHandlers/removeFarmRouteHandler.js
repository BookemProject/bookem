
const farm = require('../server');
async function removeFarmRouteHandler(req,res){


const farmID=req.params.id;
const owner=req.params.owner;
 farm.deleteOne({_id:farmID},(err,result)=>{

    if(err){

        console.log(err)
    }
    else{

        farm.find({owner:owner},(err,result)=>{
            if (err){
                console.log(err)
              }
              else{
                res.send(result);
               
                
              };


        })
    }
}) 
    

}

module.exports=removeFarmRouteHandler;