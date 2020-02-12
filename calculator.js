//lets try to create the calculator

var calculator={

    Addition:function(a,b){
        console.log("Addition of the Two number is :"+(a+b))
    },
    Multiplication:function(a,b){
        console.log("Multiplication of these Two number is:"+(a*b))
    },
    Division:function(a,b){
        console.log("Devision of the Two Number is:"+(a/b))
    },
    Substraction:function(a,b){
        console.log("Substraction of the Two number is :"+(a-b))
    }

}

exports.module=calculator;