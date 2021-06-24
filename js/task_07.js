// Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».
// Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00

const hours = +prompt('Enter the hours ');
const minutes = +prompt('Enter the minutes ');
const seconds = +prompt('Enter the seconds ');


function Output(h,m,s){
    let result = '';
    if ((s == 0)&&(m == 0)) result = '<<' + String(h) + ':00:00:>>';
    else if (s == 0) result = '<<' + String(h) + ':' + String(m) + ':00>>';
    else if (m == 0) result = '<<' + String(h) + ':' + '00:' + String(s) + '>>';
    else  result = '<<' + String(h) + ':' + String(m) + ':' + String(s) + '>>';
    return result;
}

alert(Output(hours,minutes,seconds));