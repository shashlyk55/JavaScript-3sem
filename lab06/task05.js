`use strict`

// task 05
/*
Массив [1, 2, 3] передайте в качестве параметра функции sumValues. 
Используйте spread оператор.
*/

function SumValues(x, y, z){
/*function SumValues(...args){
    let res = 0;
    for(let e of args)
        res += e;
    return res;*/
    return x + y + z;
}
let arr = [1, 2, 3]

console.log(SumValues(...arr))