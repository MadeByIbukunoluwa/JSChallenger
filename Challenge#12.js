// Write a function that takes a number (a) as argument
// If a is a whole number (has no decimal place), return true
// Otherwise, return false
function myFunction(a) {
  if (a === parseInt(a)) return true;
  return false;
}

console.log(myFunction(3));

function myFunction(a) {
  return a - Math.floor(a) === 0;
}
console.log(myFunction(0.93));
