// Написать функцию, которая принимает минимальное и максимальное значения для диапазона, 
// и выводит только те числа из диапазона, которые являются совершенными. 

let minNumber = prompt('Enter the min number')
let maxNumber = prompt('Enter the max number ');

function nodSum(n){
    let sum = 0;
    for (let i = 1; i < n; i++){
        if (n % i == 0) sum += i;
    }
    return sum;
}

function idealNumbers(minNumber,maxNumber){
    let result = '';
    for (let i = minNumber; i <= maxNumber; i++){
        if (i == nodSum(i)) result = result + String(i) + ' ';
    }
    if (result == '') result = 'No ideal numbers';
    return result;
}

alert(idealNumbers(minNumber,maxNumber));