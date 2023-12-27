`use strict`

// task 04
/*
Переопределите дескриптор свойств:
- «цена»: свойство можно изменять, можно перечислять, нельзя удалять;
- “уникальный номер товара”:  нельзя изменять, можно перечислять, нельзя удалять.
*/

let newProducts = {
    shoes: {
        discount: 15,
        boots: [
            {id: 12, size: 40, color: "black", cost: 200,
            get Cost(){
                return this.cost - newProducts.shoes.discount;
            }
        },
            {id: 15, size: 42, color: "darkblue", cost: 150,
            get Cost(){
                return this.cost - newProducts.shoes.discount;
            }
        },
            {id: 9, size: 41, color: "orange", cost: 180,
            get Cost(){
                return this.cost - newProducts.shoes.discount;
            }
        },
        ],
        sneakers: [
            {id: 1, size: 39, color: "black", cost: 300,
            get Cost(){
                return this.cost - newProducts.shoes.discount;
            }
        },
            {id: 6, size: 42, color: "white", cost: 230,
            get Cost(){
                return this.cost - newProducts.shoes.discount;
            }
        },
            {id: 3, size: 43, color: "red", cost: 400,
            get Cost(){
                return this.cost - newProducts.shoes.discount;
            }
        },
        ],
        sandals: [
            {id: 23, size: 38, color: "white", cost: 70,
            get Cost(){
                return this.cost - newProducts.shoes.discount;
            }    
        },
            {id: 13, size: 40, color: "yellow", cost: 100,
            get Cost(){
                return this.cost - newProducts.shoes.discount;
            }
        },
            {id: 28, size: 39, color: "white", cost: 90,
            get Cost(){
                return this.cost - newProducts.shoes.discount;
            }
        },
        ]
    },
    other: {},
}

let {shoes} = newProducts

/*for(let type in shoes){
    if(Array.isArray(shoes[type]))
        for(let item of shoes[type]){
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
        }
}*/
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
console.log(shoes.boots[0].cost)
shoes.boots[0].cost = 9999
console.log(shoes.boots[0].cost)

console.log(shoes.boots[0].id)
shoes.boots[0].id = 9999
console.log(shoes.boots[0].id)
