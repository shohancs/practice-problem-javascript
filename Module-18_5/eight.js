// Let's say you have x amount of money. if you have more than 80,000, then you will by a mac if more than 60,000 then you will by gaming laptop if you more than 40,000 then  you will by Lenovo Yoga if you have more than 20, 000 then  you will by an used laptop otherwise, you will use you mobile phone.

var money = 43000;
if (money >= 80000) {
    console.log('MAC');
}
else if (money >= 60000) {
    console.log('Gaming Laptop');
}
else if (money >= 40000) {
    console.log('Lenovo Yoga');
}
else if (money >= 20000) {
    console.log('Used Laptop');
}
else {
    console.log('Mobile Phone');
}