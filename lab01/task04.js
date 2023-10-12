`use strict`

// task4
/* Сравните и объясните «Котик» и «котик», «Котик» и «китик», 
    «Кот» и «Котик»,  «Привет» и «Пока», 73 и «53», false и 0, 54 и true, 
    123 и false,   true и «3», 3 и «5мм», 8 и «-2», 34 и «34», null и undefined.  
    Использовать тернарный оператор. */

console.log("Котик" > "котик" ? "Котик" : "котик");
console.log("Котик" > "китик" ? "Котик" : "китик");
console.log("Кот" > "Котик" ? "Кот" : "Котик");
console.log("Привет" > "Пока" ? "Привет" : "Пока");
console.log(73 > "53" ? 73 : "53");
console.log(false == 0);
console.log(54 > true ? 54 : true);
console.log(123 > false ? 123 : false);
console.log(true > "3" ? true : "3");
console.log(3 > "5мм" ? 3 : "5мм");
console.log(8 > "-2" ? 8 : "-2");
console.log(34 == "34");
console.log(null == undefined);
