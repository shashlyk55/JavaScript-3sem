`use strict`

// task1
/* 
Функция принимает basicOperation принимает три аргумента: оператор (строка) и 
    два операнда (числа); возвращает результат вычисления. 
*/

function basicOperation(operator, number1, number2){
    switch(operator){
        case('+'):
            return +number1 + +number2;
        break;
        case('-'):
            return number1 - number2;
        break;
        case('*'):
            return number1 * number2;
        break;
        case('/'):
            return number1 / number2;
        break;
        default:{
            return alert("Некорректный оператор")
        }
    }
}
let num1 = prompt("Введите первое число ", 0)
let num2 = prompt("Введите второе число ", 0)
let operator = prompt("Введите действие с числами ", "")

if(basicOperation(operator, num1, num2))
    alert(`${num1} ${operator} ${num2} = ${basicOperation(operator, num1, num2)}`);
else
    alert("Ошибка вычислений")