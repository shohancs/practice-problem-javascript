/* Write a function called odd_even() Write a program find prime number*/
function prime(num){
    let j = 0; 
    for (var i = 1; i<= num; i++) {
        if (num % i == 0) { 
            j++; 
        }
    }
    if (j == 2) {
        console.log('It is a prime number');
    }
    else {
        console.log('It is not a prime number');
    }
}
var number = prime(26);