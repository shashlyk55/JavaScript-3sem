`use strict`

//task 01

/*
Имеется массив numbers. Сохранить первый элемент массива 
в переменную y используя деструктуризацию.
*/

let numbers = [2, 5, 7, 1, 9];
let [x,,y] = numbers;

console.log(numbers)
console.log(y)
