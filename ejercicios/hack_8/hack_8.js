/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * 1) anexar al array result los items [bar,baz,qux]
 * 2) los 2 primeros items reescribir el caracter "a" por @
 * modificar el último item "quz" a mayúscula
 *  
 * 
 * output => ["b@r","b@z","QUX"]   
 */
let arr = ["foo","bar","baz","qux","echo"];
let result = [];

result=arr.slice(1,4)

for(let i = 0;i <= result.length-1;i++){
    if(result[i]===result[2]){
        result.push(result[i].toUpperCase())
        result.splice(2,1)
    }else{
        if(i<2 && result[i] == result[0]){
            result.splice(i,1,"b@r")
            }else{
                if(result[i] == result[1]){
                    result.splice(i,1,"b@z")
                }
            }
    }
    
}
console.log(result)
//export result
module.exports = result;