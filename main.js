let studentRecords = [ {name: 'John', id: 123, marks : 98 },
          {name: 'Baba', id: 101, marks : 23 },
          {name: 'yaga', id: 200, marks : 45 },
          {name: 'Wick', id: 115, marks : 75 } ] 

        //  let name = studentRecords.map(  z => z.name.toUpperCase());
        //   console.log( name)
// query-1
 let qone = studentRecords.map((value) => {
            return value.name;
      });
      console.log(qone)


// query-2
const arr= [{name: 'John', id: 123, marks : 98 },{name: 'Wick', id: 115, marks : 75 }]
let newArr = arr.filter(arr => arr.marks > 50);
console.log(newArr);

// query-3
const num= [{name: 'John', id: 123, marks : 98 },{name: 'Wick', id: 115, marks : 75 }]
let newNum = num.filter(num => num.marks > 50 && num.id > 120);
console.log(newNum);

// query-4
let qfour = studentRecords.reduce((accumulator, currentValue) => {
    return currentValue.marks + accumulator
}, 0);
console.log(qfour)


// query-5
let qfive = studentRecords.filter((value) => {return (value.marks>50)}).map(value => value.name);
console.log(qfive);


// query-6
let qsix = studentRecords.filter(value => value.id>120).reduce((accumulator, curr) => {
    return accumulator + curr.marks
}, 0);
                  
console.log(qsix);

// query-7
let qseven = studentRecords.filter(value => value.marks<50).map(value => value.marks + 15)
let result = studentRecords.filter(value => value.marks>50).reduce((a, v) => {return a + v.marks},0) + qseven.filter(value => value>50).reduce((lastAcc, lastCurrVal) => {return lastAcc + lastCurrVal},0)
console.log(result);

// query-8
let data = [
{name: "David", class: "9th", rollNo: "1"},
{name: "Maya", class: "10th", rollNo: "2"},
{name: "Zain", class: "10th", rollNo: "3"},
{name: "Yousuf", class: "7th", rollNo: "4"},
{name: "Aditya", class: "8th", rollNo: "5"},
{name: "Anam", class: "6th", rollNo: "6"}
]

console.log(data);


const queryone =document.getElementById('text')
console.log(queryone,'hello')
const querytwo =document.getElementsByTagName('h1')
console.log(querytwo)
const querythree =document.getElementsByClassName('box')
console.log(querythree)
document.querySelector('#heading').textContent="Hello world"

function sum (){
    console.log();
} 



//function
let addition = (x,y) =>{
    let p =x+y;
    return p;
}
 console.log(addition(4,5));

//arrow function
let multiply = (x,y) =>{
    let p =x*y;
    return p;
}
 console.log(multiply(4,5));




var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl ();

var x = 21;
girl ();
console.log(x)
function girl() {
    console.log(x);
    var x = 20;
};



var x = 21;
a();
b();

  function a() {
    
   x = 20;
  console.log(x);
};
 function b() {
    
    x = 40;
   console.log(x);
};


function  factorial (n){
    let fact = 1;
    for(let i=n;i>=1;i--){
        fact*=i
    }
    return (fact);
}
console.log(factorial(3));


//inheritance
const parent ={
    firstName:'riya',
    lastName:'sharma',
    name(){
        return(this.firstName+" "+this.lastName)
    }
}
const child={
    __proto__:parent
}
console.log(child.name())


//  let arr1 = [1, 2, 3, 4]
//  let arr2 = [2, 3, 4, 5]
//  let arr3 = [3, 4, 5, 6]

//  const array ={
//     add : function(arr){
//         let sum = 0;
//         for(let i=0; i<arr.length;i++);
//         sum = sum + arr[i]
//         console.log(sum)
//     }
   
//  }
//  array.__proto__=array;
//  arr =[1,2,3,4];
//  array.add(arr)
 

// arr = [1,2,3,4,5,6];

// const arraysum ={
//   addAll:function(arr){
//     let sum =0;
//     for(let i=0;i<arr.length;i++){
//         sum = sum+arr[i]
//     }
//     console.log(sum)
// }
// }

// Array.__proto__=arraysum;
// arraysum.addAll(arr);


function person() {
    this.name = 'John'
}
person.prototype.age = 23

const person1 = new person();

console.log(person1.name); // John
console.log(person1.age); // 23


var obj1 = {
   name: "Areeb",
    batch:17
}
let res = Object.keys(obj1)
console.log(res)

const mynum = (n)=>{
    for (let i = 1; i <= n; i++) {
        setTimeout( () =>{
          console.log(i)
        }, i * 1000)
      }
  }
 mynum(7);



function myfun(a){
    console.log(a)
    console.log('hello, world');
}
myfun("xyz")


let printNumber =(time, num) =>{
    return new promise ((resolve, reject)=>{
        if (num){
            setTimeout(()=>{
                resolve(num());
            },time)
        }
        else{
            reject(console.log("failed"))
        }
    })
}
printNumber(0, () =>console.log("Passed")).then(()=>{
    return printNumber(1000,() =>{console.log("1")})
})