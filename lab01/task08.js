`use strict`

// task8 
/* К каждому четному числу в диапазоне [1, 10] прибавьте 2, 
    а каждое нечетное число преобразуйте к строке вида «Xмм», 
    где X – нечетное число. Выведите результат.*/

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(let i = 0; i < array.length; i++){
    if(array[i] % 2 == 0)
        array[i] += 2;
    else array[i] = array[i] + "mm";
}

alert(array);
console.log(array);