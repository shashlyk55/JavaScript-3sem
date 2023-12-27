`use strict`

// task 03
/*
Создайте объект newProducts аналогичный первому. 
Добавьте свойства   «скидка» и «стоимость товара». 
Преобразуйте свойство «цена» в свойство-аксессор таким образом, 
чтобы цена товара рассчитывалась с учетом стоимости и  
скидки на товар.
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

console.log(newProducts)

console.log(newProducts.shoes.boots[2].Cost)
console.log(newProducts.shoes.sandals[1].Cost)
console.log(newProducts.shoes.sneakers[0].Cost)