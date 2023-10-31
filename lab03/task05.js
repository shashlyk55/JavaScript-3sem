`use strict`

// task5
/* 
Создайте функцию, которая принимает несколько объектов в качестве параметров и 
возвращает НОВЫЙ объект со всеми свойствами из входных объектов. 
Для объединения объектов и создания НОВОГО объекта использовать метод assign
Примеры:
 extend( {a: 1, b: 2}, {c: 3} ) 
 // result === {a: 1, b: 2, c: 3}

 extend( {a: 1, b: 2}, {c: 3}, {d: 4} ) 
 // result === {a: 1, b: 2, c: 3, d: 4}

 extend( {a: 1, b: 2}, {a: 3, c: 3} ) 
 // result === {a: 1, b: 2, c: 3}

*/

function f(...objects){
    let resObj = {};
    
    Object.assign(resObj, ...objects);
    return resObj;
}

let obj1 = {
    name: "Bill",
    age: 24
}
let obj2 = {
        a: 3
    }

let obj3 = {
    name: "John",
    city: "New-York",
    country: "USA"
}

console.log(f(obj1, obj2, obj3));


