// Написать функцию, которая считает разницу между датами. 
// Функция принимает 6 параметров, которые описывают 2 даты, и возвращает результат в виде строки «чч:мм:сс».
//  При выполнении задания используйте функции из предыдущих 2-х заданий: 
//  сначала обе даты переведите в секунды, узнайте разницу в секундах, а потом разницу переведите обратно в «чч:мм:сс»

const hours1 = +prompt('Enter the hours of first date');
const minutes1 = +prompt('Enter the minutes of first date');
const seconds1 = +prompt('Enter the seconds of first date');
const hours2 = +prompt('Enter the hours of second date');
const minutes2 = +prompt('Enter the minutes of second date');
const seconds2 = +prompt('Enter the seconds of second date');

function outputSeconds(h,m,s){
    let result = 0;
    result = h * 60 * 60 + m * 60 + s;
    return result;
}

function DiffSeconds (h1, m1, s1, h2, m2, s2){
    let secondsFirstDate = outputSeconds(h1, m1, s1);
    let secondsSecondDate = outputSeconds(h2, m2, s2);
    let diffSeconds = secondsSecondDate - secondsFirstDate;
    return diffSeconds;
}

let differenceSeconds = DiffSeconds(hours1,minutes1,seconds1,hours2,minutes2,seconds2)

function Time(seconds){
    let h = 0;
    let m = 0;
    let s = 0;
    let result='';
    h = Math.trunc(seconds/3600);
    m = Math.trunc((seconds - 3600 * h)/60);
    s = seconds - h * 3600 - m * 60;
    result = '<<' + h + ':' + m + ':' + s + '>>'
    return result;
}

alert(Time(differenceSeconds));