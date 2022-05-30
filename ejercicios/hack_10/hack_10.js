/**
 * ["foo","bar","baz","qux","echo","octo","cat","foobar","quux"]
 * 
 * anexar al array result los items con los indices impares
 * formula (n % 2 == 1) para obtener un indice impar
 * 
 * example =>
 * if(indice % 2 == 1){
 *   ...
 * }  
 * 
 * 
    output => ["bar","qux","octo","foobar"]   
 */
let arr = ["foo","bar","baz","qux","echo","octo","cat","foobar","quux"];
let result = [];

let i = 0;
let len = arr.length-1 ;
for(;i <= len;i++){
   let palabra = arr[i]
   if(i % 2 == 1){
      result.push(palabra)
   }
}
console.log(result)

//export result
module.exports = result;