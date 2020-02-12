const async= require('async');

var obj={
    "first":[1,2,3,4],"b":[2,3],"c":[4,6,7]
};

var data=[1,2,3,4,5,6,7];

async.each(obj,function(test){
   // console.log(test);
})




async.eachSeries(obj,function(value,callack){
    console.log(value);
    callack();
})