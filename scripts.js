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

/* 4. **Sorting**: 
Use `sort` to alphabetically sort the provinces.  */
console.log(provinces.sort());

/* 5. **Filtering Cape**: 
Use `filter` to remove provinces containing "Cape". 
Log the count of remaining provinces. */

const filterCape = provinces.filter(province => !province.includes('Cape'));
console.log(filterCape);

/* 6. **Finding 'S'**: 
Create a boolean array using `map` and `some` to determine if a name contains the letter 'S'.
 */

const containsS = names.map(name => 
  Array.from(name).some(char => char.toLowerCase() === 's')
);
console.log(containsS);

/* 7. **Creating Object Mapping**: 
Use `reduce` to transform the names array into an object mapping 
names to their respective provinces. */

const nameToProvinceObject = names.reduce((newObject, name, index) => {
  newObject[name] = provinces[index];
  return newObject;
}, 
{});

console.log(nameToProvinceObject);

console.log(

  // 1. Log Products
  products.map(name => name.product),

  // 2. Filter by Name Length
  products.filter(name => name.product.length <= 5).
  map(name => name.product),

  // 3. Price Manipulation
  products
  .filter(product => (typeof product.price === 'string' && product.price.trim() !== '') || (typeof product.price === 'number'))
  // Convert string prices to numbers
  .map(product => parseInt(product.price))
  // Calculate total price using reduce
  .reduce((total, price) => total + price, 0), 

  // 4. Concatenate Product Names
  products.reduce((concatenatedNames, product) => 
    concatenatedNames + product.product, ''),

  // 5. Find Extremes in Prices
  products.reduce((result, product) => { 
    const price = parseInt(product.price); 
      if (price) { 
        result.Highest = Math.max(result.Highest || 0, price); 
        result.Lowest = Math.min(result.Lowest || Infinity, price); 
      } 
        return result
   }, 
    {Highest: undefined, Lowest: undefined}),

  // 6. Object Transformation
Object.entries(products).reduce((acc, [index, product]) => {
  acc.push({ name: product.product, cost: product.price });
      return acc;
    }, []),


);