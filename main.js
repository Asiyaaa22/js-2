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