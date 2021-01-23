//we can export functin as a class and we re use them multiple time
// this will exported at local directory if want to do it globaly then need to 
// add it to export it globaly
//codes are below

module.exports=function(firstname,lastname,designation,exp)
{
    this.firstname=firstname;
    this.lastname=lastname;
    this.designation=designation;
    this.exp=exp;
    this.employeedetails=function(){
        return this.firstname+' '+this.lastname+' '+'having exp of:'+' '+exp+' '+'and designation is '+designation;
    }
}