`use strict`
// task 01
/*
Создайте объект products={}, в котором хранится весь имеющийся товар.  
Весь товар разделен на категории, одна из них «Обувь», 
которая в свою очередь делится на виды «Ботинки», «Кроссовки», «Сандалии». 
О каждой паре обуви хранится следующая 
информация: уникальный номер товара, размер обуви, цвет, цена. 
*/

let products = {
    shoes: {
        boots: [
            {id: 12, size: 40, color: "black", cost: 200},
            {id: 15, size: 42, color: "darkblue", cost: 150},
            {id: 9, size: 41, color: "orange", cost: 180},
        ],
        sneakers: [
            {id: 1, size: 39, color: "black", cost: 300},
            {id: 6, size: 42, color: "white", cost: 230},
            {id: 3, size: 43, color: "red", cost: 400},
        ],
        sandals: [
            {id: 23, size: 38, color: "white", cost: 70},
            {id: 13, size: 40, color: "yellow", cost: 100},
            {id: 28, size: 39, color: "white", cost: 90},
        ]
    },
    other: {},

}
export {products}


