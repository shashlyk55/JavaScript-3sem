`use strict`

// task2
/* 
Реализовать функцию, которая принимает число n и 
    возвращает сумму кубов всех чисел до n включительно. 
*/

function f(n){
    /*let result = 0
    for(let i = 1; i <= n; i++){
        result += i * i * i;
    }
    return result;*/

    if(n == 0){
        return 0;
    }
    else{
        return (n ** 3) + f(n - 1);
    }
}

let number = prompt("Число", 0)
alert(f(number));