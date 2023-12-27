`use strict`

// task 06
/*
Создайте объект allProducts аналогичный newProducts. 
Каждый товар (пару обуви) создайте с помощью конструктора.
*/

const allProducts = {
    shoes: {
        discount: 15,
        boots: [],
        sneakers: [],
        sandals: []
    }
}

let {shoes} = allProducts

for(let type in shoes){
    if(Array.isArray(shoes[type]))
        shoes[type].map(function(item){
            Object.defineProperty(item, 'cost', {
                writable: true,
                enumerable: true,
                configurable: false
            });
            Object.defineProperty(item, 'id', {
                writable: false,
                enumerable: true,
                configurable: false
            });
        })
}

function Boots(id, size, color, cost){
    this.id = id;
    this.size = size;
    this.color = color;
    this.cost = cost;
}
function Sneakers(id, size, color, cost){
    this.id = id;
    this.size = size;
    this.color = color;
    this.cost = cost;
}
function Sandals(id, size, color, cost){
    this.id = id;
    this.size = size;
    this.color = color;
    this.cost = cost;
}
let nikeShoes = new Sneakers(2, 42, "orange", 222)
let boots1 = new Boots(1, 39, 'red', 190)
let sandals1 = new Sandals(3, 41, 'blue', 120)

allProducts.shoes.boots.push(boots1);

console.log(shoes)

//let {shoes: {discount, boots, sneakers, sandals}} = allProducts

/*function Shoes(type, id, size, color, cost){
    shoes[type].push({id, size, color, cost});
}*/
//Shoes('sneakers', 2, 42, "orange", 222)
//Shoes('boots', 1, 39, 'red', 190)
//Shoes('sandals', 3, 41, 'blue', 120)