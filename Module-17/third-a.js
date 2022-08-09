var num1 = 43;
var num2 = 79;
var num3 = 45;

if (num1 > num2) {
    if (num1 > num3) {
        console.log(num1);
    }
    else {
        console.log(num3);
    }
}
else {
    if (num2 > num3) {
        console.log(num2);
    }
    else {
        console.log(num3);
    }
}

// if (num1 >= num2 && num1 >= num3) {
//     console.log('13 is largest');                  
// }
// else if (num2 >= num1 && num2 >= num3) {
//     console.log('79 is largest');                  
// }
// else if (num3 >= num1 && num3 >= num2) {
//     console.log('45 is largest');                  
// }