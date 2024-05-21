// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

/* 1. **ForEach Basics**: 
Use `forEach` to log each name and each province to the console. 
Then, log each name with a matching province in the format "Name (Province)". 
*/

// Log each name to the console
names.forEach(name => {
  console.log(name)
});

// Log each each province to the console
provinces.forEach(province => {
  console.log(province)
});

// Log each name with a matching province
names.forEach((name, index) =>{
  console.log(`${name} (${provinces[index]})`)
});

/* 2. **Uppercase Transformation**: 
Use `map` to create a new array of province names in all uppercase. 
Log the new array to the console. */

const upperCaseProvinces = provinces.map(province => {
  console.log(province.toUpperCase());
});


/* 3. **Name Lengths**: 
Create a new array using `map` that contains the length of each name. */

const nameLengths = names.map(name => {
  console.log(name.length);
});

