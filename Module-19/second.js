/* 2) Write a function called make_avg() which will take an three integers and return the average of those values. */

function make_avg(num1, num2, num3) {
    console.log(num1, num2, num3);
    const sum = num1 + num2 + num3;
    const average = sum / 3;
    return average; 
}
const averageMarks = make_avg(20, 30, 50);
console.log(averageMarks.toFixed(2)); //toFixed(2)