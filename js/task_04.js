// Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь
// Если в функцию передали 1 параметр, то она вычисляет площадь квадрата

const length = prompt('Enter the length ');
const width = prompt('Enter the width ');

function Area(a,b){
    if (b == undefined) return a * a;
    else return a * b;
}

alert('The area is ' + Area(length,width));