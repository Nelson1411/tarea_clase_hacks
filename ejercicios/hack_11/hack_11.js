/**
 * [1,2,3,4,5]
 * ["foo","bar","baz","qux","echo"]
 * 
 * 1) incluir los 2 array en 1 solo array
 * 2) los items del number array 1,3,5 se reescriben one,three,five
 * del string array todos sus items mutan de acuerdo a lo siguiente:
 * foo => f00
 * bar => Bar
 * baz => b@z   
 * qux => quX
 * echo => 3ch0
 * 3) anexar al inicio, al final y entre la unión de los array el string "h@ck"
 * 
 * 
 * output => ["h@ck","one",2,"three",4,"five","h@ck","f00","Bar","b@z","quX","3ch0","h@ck"]   
 */
let numberArray = [1,2,3,4,5];
let stringArray = ["foo","bar","baz","qux","echo"]
let result = [];

let array=[]
for(let i = 0;i <= numberArray.length-1;i++){
    result.push(numberArray[i])
}
for(let i = 0;i<=stringArray.length-1;i++){
    result.push(stringArray[i])
}

for(let i = 0;i <= result.length - 1;i++){
    let item = result[i]
    if(item % 2 == 1 && item == 1){
    result.splice(i,1,"one")
    }else{
        if(item % 2 == 1 && item == 3){
            result.splice(i,1,"three")
        }else{
            if(item == 5)
            result.splice(i,1,"five")
            }
    }    
    if(i >= 5 && item ==result[5]){
        result.splice(i,1,"f00")
    }else{
        if(item==result[6]){
            result.splice(i,1,item[0].toUpperCase()+item.slice(1))
            }else{
                if(item == result[7]){
                    result.splice(7,1,"b@z")
                }else{
                    if(item==result[8]){
                        result.splice(i,1,item.slice(0,2)+item[2].toUpperCase())
                    }else{
                        if(item==result[9])
                        result.splice(i,1,"3ch0")
                    }
                }
            }
        
        }
}
result.unshift("h@ck")
result.push("h@ck")
result.splice(6,0,"h@ck")

console.log(result)
console.log(array)

//export result
module.exports = result;