`use strict`

// task 02
/*
Создайте функцию-фильтр обуви 
по цене в заданном диапазоне, по заданному размеру, по заданному цвету. 
Выведите номера товаров, соответствующих заданному условию (фильтру).
*/

import {products} from "./task01.js"

let {shoes} = products
let {shoes: {boots: [], sneakers: [], sandals: []}} = products

let costFilter = Filter(shoes, 'cost', 110, 250)
let sizeFilter = Filter(shoes, 'size', 39, 41)
let colorFilter = ColorFilter(shoes, "white")

console.log(costFilter)
console.log(sizeFilter)
console.log(colorFilter)


function Filter(obj, property, min, max){
    let arr = []
    for(let type in obj){
        for(let item of obj[type]){
            if(item[property] <= max && item[property] >= min) 
                arr.push(item.id)
        }
    }
    return arr;
}

function ColorFilter(obj, color){
    let arr = []
    for(let type in obj){
        for(let item of obj[type]){
            if(item.color == color) 
                arr.push(item.id)
        }
    }
    return arr;
}