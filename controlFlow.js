let marks=85
if(marks>=90){
    console.log("A+ Grade")
}else if(marks>=80){
    console.log("B Grade")
}else{
    console.log("C Grade")
}

//Switch case
let day=5
switch(day){
    case 1 :
        console.log("monday")
        break
    case 2 :
        console.log("tuesday")
        break
    case 3 :
        console.log("wednesday")
        break
    case 4 :
        console.log("thursday")
        break
    case 5 :
        console.log("friday")
        break
    case 6 :
        console.log("saturday")
        break
    case 7 :
        console.log("sunday")
        break
    default :
        console.log("invalid")
        break
}

//for loop
let n = 10
for (i=0;i<n;i++){
    console.log(i)
}

//while loop 
let count = 5
while(count>=0){
    console.log(count)
    count--
}

let colors = [ "red", "blue", "green"]
/*for(let i=0 ; i<=colors.length; i++){
    console.log(colors)
}
*/
for(color of colors){
    console.log(color)
}

let person={
    name : "meghana",
    age : 19,
    place :"vizag"
}

for(let key in person){
    console.log(`${key}: ${person[key]}`)
}

for(let i=5; i>=0;i--){
    if (i===3){
        continue
    }
    else if(i===2){
        break}
    console.log(i)
}

