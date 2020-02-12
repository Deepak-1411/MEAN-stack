// By uaing this code we can send an email using the node js application
const nodemailer= require('nodemailer');
 
var transporter= nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'i.am.mr.paloo7@gmail.com',
        pass:'8454017464'
    }

});
var mailoption={
    from:'i.am.mr.paloo7@gmail.com',
    to:'paldeepaksofttest@gmail.com',
    subject:'Sending Email using node js',
    text:'Woooh that is too easy to do so'

};

transporter.sendMail(mailoption,function(error,info){
    if(error){
        console.log(error)
    }else{
        console.log("Email sent to the "+info.response)
    }
});