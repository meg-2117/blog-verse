let person ={
    name : "meghana",
    age: 19
}
console.log(person.name)
console.log(person.age)

const {name ,age}=person//destructuring
console.log(name)
console.log(age)

let fruits = ["apples", "mangoes", "oranges"]
console.log(fruits[0])

let numbers=[1,2,3,4,5]

let squares=numbers.map((num)=>num*num)//transform each element (it returns an array , but a new and different array) in other words it manipulates and tranforms the elements 
console.log(squares)

let evens = numbers.filter((num)=>num%2==0)//filters values(elements that satisfy the condition form a new array)
console.log(evens)

let sum = numbers.reduce((present,num)=>present+num,0)//reduce (brings the total array into single value)
console.log(sum)

let students=[{
    name : "farhaana",
    marks : 82
},{
    name : "teja",
    marks : 89
},{
    name : "ramya",
    marks : 90
}]
for(let student of students){
    console.log(student)
}
console.log(students)


let maxMarks=0
let topper=""
for (let student of students){
    if(student.marks>maxMarks){
        maxMarks=student.marks
        topper=student.name
    }
}
console.log(`topper is ${topper} and she got ${maxMarks}`)