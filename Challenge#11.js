
// Write a function that takes an array of numbers as argument
// It should return the sum of the numbers
function myFunction (a){
return a.reduce((accValue,currValue) =>{
  return accValue + currValue
},0)
}

console.log(myFunction([10,100,40]))