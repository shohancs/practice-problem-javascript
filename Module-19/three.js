/* Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values. */

function make_avg() {
    const arrayValue = [10, 20, 30];
    const average = arrayValue.reduce((a, b) => a + b, 0) / arrayValue.length; // a:0 b:10 => a:10 b:20 => a:30 b:30 => 60/3=20
    console.log('Average Value is:', average);
    return average;
}
make_avg();