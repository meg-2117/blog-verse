//Arithmetic operators 
let a = 10, b = 5
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)
console.log(a**b)

//Assignment operators
let c = 20
c+=4
console.log(c)
c-=5
console.log(c)
c*=2
console.log(c)
c/=4
console.log(c)
c%=2
console.log(c)

//Comparison operators
let d = 10 , e = "10"
console.log(a==b)
console.log(a!=b)
console.log(a===b)
console.log(a!==b)
console.log(a<=b)
console.log(a>=b)
console.log(a<b)
console.log(a>b)

//Logical operators
let age = 20
console.log(age>=20 && age<=40)
console.log(age<20 || age>20)
console.log(!(age<18))

//String operators
let firstname = "meghana"
lastname = "Biddika"
let fullname= firstname + lastname
console.log(fullname)
let correctName = `hello ${firstname} ${lastname}, welocome `
console.log(correctName)

//Ternary operators
let myAge=19
if(myAge>=18){
    console.log("eligible to vote")
}else{
    console.log("not-eligible to vote")
}
let result=myAge>=18 ? "eligible to vote" : "not eligible to vote"
console.log(result)

//Increment and Decrement operators
let count=5
console.log(count++)
console.log(count)
console.log(++count)

//typeof operator

console.log(typeof count)
console.log(typeof "meghana")
console.log(typeof 18)

