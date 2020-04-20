let age = +prompt("Please enter your age ?");
if(isNaN(age)){
    age= prompt("Please enter your age as a number");
}
let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let retirementAge = +prompt("Please enter your retirement age ?");
let yearLeft = retirementAge - age;
let retirementYear = currentYear + yearLeft;



document.write(yearLeft + " years left till retire" + "<br>");
document.write("You  will retire in the year " + retirementYear);







