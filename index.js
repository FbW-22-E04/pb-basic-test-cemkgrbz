// Add answers here 

//Conditional Algorithms 
//1

function nameOfCity (name) {
    const lowerCaseName = name.toLowerCase(); 
    if (lowerCaseName.includes('new') || lowerCaseName.includes('los')){
        return name;
    }   return 'The city name does not begin with Los or New'
}

console.log(nameOfCity('New York')) //'New York'
console.log(nameOfCity('newark')) //'newark'
console.log(nameOfCity('London')) //'The city name does not begin with Los or New'

//2

function isDivisible (x) {
    if (x%100 === 0){
        return true 
    }   return false
}

console.log(isDivisible(1)) // false
console.log(isDivisible(1000)) // true
console.log(isDivisible(100)) // true

//3

function isRaining (day) {
    return day ? 'wet day - you need an umbrella' : 'dry day - leave your umbrella at home'
}
console.log(isRaining(true))
console.log(isRaining(false))


//Loops
//1

function geometricalSequence() {
    let multiplication = 1;
    let values = "";
    for (let i = 1; i < 9; i++) {
        multiplication *= 2;
        values += `${multiplication} `;
      }
      return `1 ${values}`
};

console.log(geometricalSequence());

//2

function multiplesOfThree(){
    let values = "";
    for (var i = 1; i <= 15; i++) {
        if (i % 3 === 0) {
        values += `${i} `; 
        }
      } 
      return values;
}

console.log(multiplesOfThree());

//Math
//1

function powerOf(x) {
    return Math.pow(x, x);
}
console.log(powerOf(3))
console.log(powerOf(4))

//Problem Solving
//1

function vowelCount(string) {
    const vowelList = 'aeiouAEIOU';
    let vowelNumber = 0; 
    for (let i = 0; i < string.length; i++) {
      if (vowelList.includes(string[i])) {
        vowelNumber++;
      }
    }
    return vowelNumber
  
}

console.log(vowelCount("hello"))
console.log(vowelCount("test"))
console.log(vowelCount("fbw"))



// DO NOT EDIT below this line - This will result in an automatic fail
// module.exports = {nameOfCity, isDivisible, missingAngle, isRaining, geometricalSequence, multiplesOfThree, powerOf, vowelCount};

