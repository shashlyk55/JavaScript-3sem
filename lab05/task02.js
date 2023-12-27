`use strict`

/*
Реализуйте каррированную функцию, которая рассчитывает 
объем прямоугольного параллелепипеда. Выполните 
преобразование функции для неоднократного расчёта объема 
прямоугольных параллелепипедов, у которых одно ребро одинаковой длины.
*/

function Volume(a){
    return function(b){
        return function(c){
            return a * b * c;
        }
    }
}
let v = Volume(4)
console.log(v(5)(8))
console.log(v(2)(3))
console.log(v(10)(3))
console.log(Volume(2)(5)(8))
