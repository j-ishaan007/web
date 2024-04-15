// operators


// console.log(2>1)
// console.log(2>=1)

console.log("2">1);
console.log("02">1);
// to compare two entities the dataypes of the two must be same, typescript does not allow the following operation

console.log(null>0);
console.log(null==0);
console.log(null >= 0);

// comparisons converts null into a number zero!!

console.log(undefined == 0);

// ===, strict check, checks the datatype of the variable too
console.log("2" === 2);

const id = Symbol('1234')
const anotherid = Symbol('1234')
console.log(id === anotherid);

const bignumber = 23445588899999n
console.log(typeof(bignumber)); 