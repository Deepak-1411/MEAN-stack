//call back with the parameters and make them useable according to them

function durationOfJourney(vehical,distance,Speed,callback){
    if(vehical="Bike"){
        console.log("Duration req to reach yr destination is ");
        callback(false)
    }

}

durationOfJourney("Bike",250,50,function(bool){
    if(bool){
        console.log("call back set to the"+ bool +"value")
    }
else{
    console.log("call back set to the"+ bool+"value")
}

});