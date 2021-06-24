// Написать функцию, которая проверяет, является ли переданное ей число совершенным
// Совершенное число – это число, равное сумме всех своих собственных делителей

let maxNumber = prompt('Enter the max number ');

function nodSum(n){
    let sum = 0;
    for (let i = 1; i < n; i++){
        if (n % i == 0) sum += i;
    }
    return sum;
}

function idealNumbers(maxNumber){
    let result = '';
    for (let i = 1; i <= maxNumber; i++){
        if (i == nodSum(i)) result = result + String(i) + ' ';
    }
    return result;
}

alert(idealNumbers(maxNumber));