`use strict`

// task1
/*
Объедините два массива с вложенностью используя reduce().
*/

let arr = [1, [1, 2, [3, 4]], [2, 4]]

function makeSingledimensional(multyDimArray){
    return multyDimArray.reduce(function(acumulator, element){
        if(Array.isArray(element)){
            return acumulator.concat(makeSingledimensional(element))
        }
        return acumulator.concat(element)
    }, [])
}

console.log(makeSingledimensional(arr))



