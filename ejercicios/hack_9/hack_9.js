/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * contar el total de items que inicien con el caracter "b"
 *  
 * 
 * output => 2   
 */
let arr = ["foo","bar","baz","qux","echo"];
let result = 0;

let ArrayNuevo = []
for(let i = 0;i <= arr.length-1;i++){
    let palabra = arr[i];
    let primeraletra = palabra.slice(0,1)
    if(primeraletra == "b"){
        ArrayNuevo.push(palabra)
    }
}
result=ArrayNuevo.length
console.log(result)
console.log(ArrayNuevo)


//export result
module.exports = result;