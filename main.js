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

//dom

const queryone =document.getElementById('text')
console.log(queryone,'hello')

const querytwo =document.getElementsByTagName('h1')
console.log(querytwo)

const querythree =document.getElementsByClassName('box')
console.log(querythree)

document.querySelector('h5').textContent="Hello world"

document.querySelector('#btn').addEventListener('click', () => {
   
    if(document.querySelector('#flex').style.flexDirection == "row") {
        document.querySelector('#flex').style.flexDirection = "column";
    }

    else {
        document.querySelector('#flex').style.flexDirection = "row";
    }
})


// 6

document.querySelector('#heading').setAttribute("style", "background-color:red");

// 7

document.querySelector('#btn-para').addEventListener('click', () => {
    document.querySelector('#para').textContent = "Welcome to Elevation academy"
})

//functions
function sum (){
    console.log();
} 

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


//promises,async,await

const oneperson =(friend, callback) => {
    console.log(`Heyya.its${friend}`);
    callback();
}
const secondperson = () =>{
    console.log(`bye`)
}
oneperson("me",secondperson);
 

const obj1 = {
   name: "Areeb",
    batch:17
}
const res = Object.values(obj1)
console.log(res)

const mynum = (n)=>{
    for (let i = 1; i <= n; i++) {
        setTimeout( () =>{
          console.log(i)
        }, i * 1000)
      }
  }
 mynum(7);

//callback hell

 function calltime(){
    setTimeout(()=>{
        console.log("1");
        setTimeout(()=>{
            console.log("2");
            setTimeout(()=>{
                console.log("3");
                setTimeout(()=>{
                    console.log("4");
                    setTimeout(()=>{
                        console.log("5");
                        setTimeout(()=>{
                            console.log("6");
                            setTimeout(()=>{
                                console.log("7");
                                 },7000)
                            },6000)
                        },5000)
                    },4000)
                },3000)
            },2000)
        },1000)
 }
 calltime()

// function myfun(a){
//     console.log(a)
//     console.log('hello, world');
// }
// myfun("xyz")


let printNumber =(time, num) =>{
    return new Promise ((resolve, reject)=>{
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



//closures
 function counter(){
    var counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}

var counter = counter();
alert(counter());
alert(counter());
alert(counter());
alert(counter());


let count = 0;
(function () {
  if (count === 0) {
    let count = 1;
    console.log(count); // What is logged?
  }
  console.log(count); // What is logged?
})(count);


for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i); // What is logged?
    }, 1000);
  }



var a = 12;
(function () {
  alert(a);
})();

var a = 10;
var x = (function () {
  var a = 12;
  return function () {
    alert(a);
  };
})();
x();

var globalVar = "xyz";

(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    console.log("outerArg = " + outerArg + "\n" + "innerArg = " + innerArg + "\n" + "outerVar = " + outerVar + "\n" + "innerVar = " + innerVar + "\n" + "globalVar = " + globalVar);
    
    })(456);
})(123);


//maps and sets
const elements =("abcadeecfb")
const unique = new Set(elements)

console.log(unique)

// let promise =(val1)=>{
//     return new Promise ((resolve,reject)=>{
//         if(val1==="yes"){
//             resolve();
//         }
//         else{
//             reject();
//         }
//     })
//     promise("no",()=>{
//         console.log("value is done")
//     }).then(()=>{
//             console.log("resolved")}).catch(()=>{
//                 console.log("rejected");})

            

            // function renderCountry(imageSrc){
            //     let countryDiv = document.querySelector(".country");
            
            //     let html = `<img src="${imageSrc}" height="100px" width="100px">`;
            //     countryDiv.innerHTML+= html;
            // }
            
            // const countryData = fetch(`https://restcountries.com/v3.1/name/india`).
            //                     then(response => {
            //                         console.log(response);
            //                         if(!response.ok){
            //                             throw new Error('Country not exists');
            //                         }
            //                         return response.json();}).
            //                     then(data=> {
            //                         console.log(data);
            //                         renderCountry(data[0].flags.svg);
            //                         const neighbour = data[0].borders[0];
            //                         console.log(neighbour);
            //                         // https://restcountries.com/v3.1/alpha/{code}
            //                         return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
            //                     }).then(response => response.json()).
                            
