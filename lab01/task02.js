`use strict`

//  task 2
/* Сколько квадратов В со сторонами 5 мм поместятся 
        в четырехугольник А (45мм х 21мм). */
let lengthB = 5;
let widthB = 5;
let lengthA = 45;
let widthA = 21;

let numberOfSquares = Math.trunc((lengthA / lengthB)) * Math.trunc((widthA / widthB));
alert(`Количество квадратов В со сторонами 5мм в четырехугольнике А 45мм х 21мм: ${numberOfSquares}`);

