// Написать функцию, которая принимает количество секунд, переводит их в часы, 
// минуты и секунды и возвращает в виде строки «чч:мм:сс»

let seconds = +prompt('Enter amount of seconds '); 

function Time(seconds){
    let h = 0;
    let m = 0;
    let s = 0;
    let result='';
    h = Math.trunc(seconds/3600)
    m = Math.trunc((seconds - 3600 * h)/60);
    s = seconds - h * 3600 - m * 60;
    result = '<<' + h + ':' + m + ':' + s + '>>'
    return result;
}

alert(Time(seconds));