var rect= require('./rectangle');

function solveRect(l,b){
    console.log("Solving for rectangle with l="+ " "+ l +" "+"and breath b="+" "+b);
    if(l<=0 ||b<=0){
        console.log("Rectangle dimention should be greater than the zero");
    }
    else{
        console.log("The Area of the rectangle is "+ rect.area(l,b));
        console.log("THe area of the perimeter  is "+ rect.perimeter(l,b));
    } 
}

solveRect(2,4);
solveRect(0,4);
solveRect(7,8);
solveRect(8,10);