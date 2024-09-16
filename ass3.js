//templates literals 
function greet(name,age){
    console.log(`Hello,my name is ${name}, and i am ${age} years old`)
}
greet("Ritik Tyagi",23)

function greet2 (name,age){
    console.log(`Hello,my name is ${name},\n i am ${age} years old`)
}
greet2("Ritik Tyagi",23)


function greet3 (a,b){
    console.log(`Hello,my name is Ritik tyagi,and i am ${a+b} years old`)
}
greet3(20,3)

//arrow function

let greet4=(a,b)=>{console.log(a+b)};
greet4(5,6)

// objext Shorthand
    const name4 = 'Raj'
    const age3 = 20
    const location = 'India'
    // User with ES6 shorthand
    // property
    const user = {
    name4,
    age3,
    location
    }
    console.log(user)


// default parameters in functions
function greet5(name="Gueast") {
    console.log(`Hello,${name}`)
    
}
greet5()


function CalculateTotal(price,tax=0.05) {
    console.log(price*tax)
    
}

CalculateTotal(500)



function calculateDiscount(price,discount=price*0.1){
    console.log(price-discount)
}

calculateDiscount(33)


// var vs let vs const
function checkBlocl(val,arr){
    var a=[]
    for(i=0;i<val;i++){
        var num=3;
        if(arr[i]==num){
            console.log(true)
            break;

        }else{
           a.push(arr[i])
        }
    }console.log(a)
}

checkBlocl(5,[1,2,3,4,5])
// here let we can access inside for loop if we can access outside for loop he throw error
// and here var we can access inside a function everywhere but we can not access outside this function
//that's a big diffrence let and var
// Temporal Death Zone
 
 //console.log(hometown)
//let hometown=saharanpur

// if we can access hometown so he give this error "Cannot access 'hometown' before initialization" and this condition we say Temporal Dead Zone


// rest and spred
function greet6(...rest){
    console.log(rest)
}
greet6("mohan","rohan","ritik","rohan","rohit")


let nums = [1, 2, 3];
let moreNums = [0, ...nums, 4]; 
console.log(moreNums);


//Destructing Obj
let obj3={
    name:"ritik tyagi",
    age:{
        age:23
    }
}

let {name,age:{age}}= obj3;

console.log(name,age)

// Destructuring arr
let [a,b,c,d,e]=[1,2,3,3,4]
console.log(a,b,c,d,e)

//optinol Chaining

let obj4={
    profile:{
        name:"Ritik",
        age:23
        
    }
}
let theme=obj4.profile?.age;
console.log(theme)


let arr6={ items: [1,2,3,4,5]}
let num4=arr6.items?.[4]
console.log(num4)

let fun ={
    profile:{
        name:"rohan",
        address:{addr: () =>"saharanpur"}
    }
}
let addressed=fun.profile?.address?.addr?.();
console.log(addressed)