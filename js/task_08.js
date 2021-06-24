// Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах

const hours = +prompt('Enter the hours ');
const minutes = +prompt('Enter the minutes ');
const seconds = +prompt('Enter the seconds ');

function outputSeconds(h,m,s){
    let result = 0;
    result = h * 60 * 60 + m * 60 + s;
    return result;
}

alert(outputSeconds(hours,minutes,seconds));