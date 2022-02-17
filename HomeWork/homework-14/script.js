var num1=+prompt("enter number1:")
var num2=+prompt("enter number2:")
var num3=+prompt("enter number3:")
var num4=+prompt("enter number4:")
var num5=+prompt("enter number5:")

if (num1>=num2 && num1>=num3 && num1>=num4 && num1>=num5 ) {
    console.log("Max:", num1)
}
else if (num2>=num1 && num2>=num3 && num2>=num4 && num2>=num5 ) {
    console.log("Max:", num2) 

}
else if (num3>=num1 && num2>=num3 && num3>=num4 && num3>=num5 ) {
    console.log("Max:", num3) 

}
else if (num4>=num1 && num4>=num3 && num2>=num4 && num4>=num5 ) {
    console.log("Max:", num4) 

}
else if (num5>=num1 && num5>=num3 && num5>=num4 && num2>=num5 ) {
    console.log("Max:", num5) 

}
else {
    console.log("max:" , num5)
}
