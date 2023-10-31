`use strict`

// task2
/*
Найдите сумму элементов массива, если вложенность массива неизвестна. 
*/

let arr = [1, [1, 2, [3, 4]], [2, 4]]

function ArrSum(array){
    return array.reduce(function(acumulator, element){
        if(Array.isArray(element)){
            return acumulator += ArrSum(element);
        }
        return acumulator += element * 1;
    }, 0)
}

console.log(ArrSum(arr))