`use strict`

// task04
/* 
Создайте коллекцию WeakMap для кеширования результатов функции. 
WeakMap должен содержать входные параметры функции и результаты расчета.  
Функция должна выполняться только в том случае, если в кэше нет данных, 
иначе – берем данные из WeakMap.
*/

function CacheFunc(map, func, obj){
    if(map.has(obj))
        alert("Значения есть в кеше. Результат = " + +map.get(obj))
    else{
        alert("Результат вызова функции = " + func(obj.v1, obj.v2))
        map.set(obj, func(obj.v1, obj.v2));
    }
}

let operation = (x, y) => x * y;

let collection = new WeakMap();

let a;
let b;
let key = {};
a = 3;
b = 7;
key.v1 = a;
key.v2 = b;

CacheFunc(collection, operation, key);

CacheFunc(collection, operation, key);








