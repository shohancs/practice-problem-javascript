/* Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values. */

function make_avg() {
    const arrayValue = [10, 20, 30];
    const average = arrayValue.reduce((a, b) => a + b, 0) / arrayValue.length;
    console.log('Average Value is:', average);
    return average;
}
make_avg();