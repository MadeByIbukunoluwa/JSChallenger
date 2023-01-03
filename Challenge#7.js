

// Write a function that takes an object as argument
  // It should return an object with all original object properties
  // except for the property with key 'b'
  function myFunction(obj){
  let filteredObj =(Object.entries(obj)).filter((el) => !el.includes("b"))
    return Object.fromEntries(filteredObj)
  }
console.log(myFunction({ a: 1, b: 7, c: 3 })
)


function myFunction2(obj) {
  const { b, ...rest } = obj;
  return rest;
}
console.log(myFunction2({ a: 1, b: 7, c: 3 })
)