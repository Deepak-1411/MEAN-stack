//here we will  pass the emplotyee details as parameter and use them and also can creat the instance for each employee
//below the code to initialize class and use of them
var empdetails=require('./EmpDetails')

var employee1= new empdetails('Deepak','pal','Sr test Engineer',5)
console.log(employee1.employeedetails())
var emp2= new empdetails('sherlock','Holmes','consultant detective','5')
console.log(emp2.employeedetails())
var emp3= new empdetails('json','bourne','Inteligence agent','1');
console.log(emp3.employeedetails())