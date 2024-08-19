const associativeObject = {
    name: 'Luca',
    age: 30,
    city: 'Berlin'
};

//Convert to an array of objects
const arrayOfObjects = Object.entries(associativeObject).map(([key, value]) => ({[key]: value}));

console.log(arrayOfObjects)

//1)Object.entries(associativeObject): Converts the associativeObject() to an array of key-value pairs.
//2)map(([key, value]) => ({[key]: value}))
//([key, value]) : Destructures each key-value pair from the array resulting from Object.entries()
//{ [key]: value } : Creates a new object with a single property, where the key ist the "key" variable and the value 
//is the "value" of the variable 

//Object.entries() allows us to iterate over all the properties of the object.
//map() helps us transform each key-value pair into a new object.
//The destructuring syntax ([key, value]) makes it easy to access the key and value of each pair.


//Order of properties: The order in which the objects appear in the resulting array may vary,
// as JavaScript does not guarantee a specific order for the properties of an object.
//Non-enumerable properties: Object.entries() only considers enumerable properties.
// If you need to include non-enumerable properties, you can use a for...in loop.


//Ejemplo con bucle for...in:

