var fruits = ['Apple', 'Banana', 'Orange'];
var bananaIndex = fruits.indexOf('Banana');
console.log(bananaIndex);

fruits[bananaIndex] = 'Mango';
fruits.pop();
fruits.push('Watermelon');
console.log(fruits);