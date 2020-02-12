function resultAnalysis(name,marks1,marks2,marks3,callback){

    var scoredtotal=parseInt(marks1)+parseInt(marks2)+parseInt(marks3);
    console.log(scoredtotal)
    var result=scoredtotal/3;

    console.log("result(In percentages) scored by the "+" "+name+" "+"is"+result+"%");
 
callback();
}
resultAnalysis("Sher@lock",'75','50','70',function(){
    console.log("result is displaying");
});
resultAnalysis("jim moryarity",60,65,75,function(){
    console.log("result is displaying");
});