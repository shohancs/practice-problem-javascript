/* You are in a hurry to go to your school on time. But when you are crossing the road, the
traffic signal is red coloured. In this situation, if you try to cross the road, you may be in
danger.If you notice a yellow coloured traffic signal, you should stop. If you notice a green
coloured traffic signal, you should cross the road. So write a JS code, where there is a
variable called signal. Its value can be green, yellow or red & we will get different activities as
output depending on the variable. So, hurry up. */

var signal = 'green';

/* if (signal == 'red')  {
    console.log(signal, ' = If you try to cross the road, you may be in danger');
}
else if (signal == 'yellow') {
    console.log(signal, ' = you should stop');
}
else if (signal == 'green') {
    console.log(signal, ' = you should cross the road');
}
else {
    console.log('Stay Safe!!');
} */

switch (signal) {
    case 'red':
        console.log(signal, ' = If you try to cross the road, you may be in danger');
        break;
    case 'yellow':
        console.log(signal, ' = you should stop');
        break;
    case 'green':
        console.log(signal, ' = you should cross the road');
        break;
    default:
        console.log('Stay Safe!!');
}