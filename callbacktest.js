//callback function and its usage 
//proper code to learn call back
function doHomework(subject, callback) {
    console.log(`Starting my ${subject} homework.`);
    callback();
    console.log("finished my"+" "+subject+" "+"homework ")
  }
  
  doHomework('math',function(){
      console.log("working proper as per the schedule")
  });
  doHomework('Science',function(){
  });