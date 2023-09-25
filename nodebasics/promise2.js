//Promise 2
// Promise                   
// A Promise structure has 2 parts 
//First part
//create the Promise and define the success/not success conditions
let promise1 = new Promise( (resolve, reject) => {

let dataReceivedSuccessfully = false; 
if (dataReceivedSuccessfully) 
  resolve('Data Available!'); 
if (!dataReceivedSuccessfully) 
  reject('Data Corrupted!'); 
}) 

//Second part 
//define the actions for when the conditions are fulfilled
  promise1.then( (message) => {
   console.log("Promise is true"+message); 
   console.log(message)
   }).catch( (message) => {
      console.log("Promise is true:"+message);
})