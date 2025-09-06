function greet(){
    console.log("hello maggie")
}
greet()

//using function variable
function add(x,y){
    return x+y;
}
let result=add(18,19)
console.log(result)

//
const multiply = function(a,b){
    return a*b
}
console.log(multiply(5,3))

//Arrow function
const square =(x)=>x*x
console.log(square(5))
const subtract = (x,y)=>{
    console.log(x,y)
    return x-y
}
console.log(subtract(5,3))