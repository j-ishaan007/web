const name = "Ishaan"
const repocount = 50

// console.log(name+repocount+" Value");

console.log(`Hello my name is ${name} and my repo count is ${repocount}`);  //string interpolation

const gameName = new String('Ishaanjaswal')

console.log(gameName[0]);  //ascessing a key value pair
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('h'));

const newString = gameName.substring(0,4);

console.log(newString);

const newStringOne = "   Ishaan   "
console.log(newStringOne);
console.log(newStringOne.trim());  //removes the space from statring and end

const url = "https://ishaan.com%20jaswal"
console.log(url.replace('%20','-'));