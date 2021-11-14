
function calcuateBirthYear(){
var age  = prompt("Enter Your Age");
let d = new Date();
let n = d.getFullYear();

	var todaysdate = new Date();
    let currentYear = todaysdate.getFullYear();
    let birthYear =  currentYear- age;
  document.getElementById("displaybirthYear").innerHTML =  birthYear;
}