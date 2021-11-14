function output() {
    var number1  = document.getElementById("num1").value;
    var number2  = document.getElementById("num2").value;
 
   
var sum  = parseInt(number1) +parseInt(number2);
   console.log(sum);
  if(sum)
   { 

    document.getElementById("sumOut").innerHTML =  sum;}

    else {
        alert("Please enter numbers to add");
    }
}