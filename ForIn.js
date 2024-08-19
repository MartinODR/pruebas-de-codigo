const associativeObject = {
    name: "John",
    age: 30,
    city: "Madrid"
  };
  
  // Create an empty array to store the new objects
  const arrayOfObjects = [];
  
  // Iterate over the object's properties
  for (let property in associativeObject) {
    // Create a new object with the property and its value
    const newObject = {};
    newObject[property] = associativeObject[property];
    // Add the new object to the array
    arrayOfObjects.push(newObject);
  }
  
  console.log(arrayOfObjects);
  // Output:
  // [
  //   { name: 'John' },
  //   { age: 30 },
  //   { city: 'Madrid' }
  // ]

//   Step-by-step explanation:

// Create an empty array: We initialize an empty array called arrayOfObjects to store the new objects we'll create.
// Iterate with for...in: The for...in loop iterates over all the enumerable properties of the associativeObject. 
//In each iteration, the property variable takes the name of the current property.

// Create a new object: Inside the loop, we create a new empty object and assign to the property with the name property 
//the corresponding value from the original object.

// Add to the array: The new object is added to the arrayOfObjects array.
// Repeat: The loop continues until all properties of the original object have been processed.
// Why create a new object in each iteration?

// By creating a new object in each iteration, we ensure that each element of the final array is an independent object.
// This prevents modifying one element of the array from affecting the others.

// Additional considerations:

// Order of properties: The order in which objects are added to the array may vary, 
//as the order of properties in an object is not guaranteed.

// Inherited properties: If the object has inherited properties from its prototypes, the for...in loop
// will iterate over them as well. If you only want the object's own properties, you can use hasOwnProperty().

// Alternatives: Although for...in is a valid option, there are other methods like Object.keys() and Object.entries()
// that can be more efficient in certain cases.

// Example with hasOwnProperty() to avoid inherited properties:

// JavaScript
// for (let property in associativeObject) {
//   if (associativeObject.hasOwnProperty(property)) {
//     // ... (rest of the code)
//   }
// }
// Usa el código con precaución.

// In summary:

// The for...in loop provides a flexible way to iterate over the properties of an object and transform them into an array 
//of objects. By creating a new object in each iteration, we ensure that each element of the array is independent.

// Would you like to see an example using Object.keys() or Object.entries()?