// Написать функцию, которая вычисляет факториал переданного ей числа

const number = prompt('Enter the number ');

function Factorial(n){
    let result = 1;
    for (i = 1; i <= n; i++){
        result *= i;
    }
    return result;
}

alert(Factorial(number));