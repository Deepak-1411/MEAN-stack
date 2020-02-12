const waitFor = (ms) => new Promise(r => setTimeout(r, ms));
[1, 2, 3].forEach(async (num) => {
  await waitFor(2000);
  console.log(num);
});
console.log('Done');


setTimeout(function(){
    console.log("Inside the "+" "+value +" "+"Field");
    console.log("<----------"+value+" Has been clicked after the 2 secs"+"-------------->");
    console.log(value+" "+"Field type has been compleated");
},2000)