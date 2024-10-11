// Module 3 Exercise: Looping in Objects
// Start with exercise-3.md if you haven't read it!

const dominos = {
  name: "Domino's",
  cuisines: ["italian", "new york", "pizza"],
  pizzaToppings: {
    pepperoni: 2.2,
    mushrooms: 0.7,
    extraCheese: 1.4,
    onions: 0.5,
    sausage: 2.8,
    extraSauce: 0.8,
  },
  starReviews: {
    Peach: 3,
    Yoshi: 2.1,
    Bowser: 4,
    Mario: 5,
    Luigi: 5,
    Gumba564: 3.4,
    "Donkey Kong": 3.2,
  },
  favorited: true,
  address: "123 Elm Street",
  zipcode: 54321,
  acceptsReservations: true,
};

// function printPizzaPlaces(obj){
//   for (let item in obj){
//     console.log(item, obj[item]);
//   }
// }

// console.log(printPizzaPlaces(dominos));

function toppingsPriceRange(obj){
  let highestPrice = -Infinity;
  let lowestPrice = Infinity;
  for (let key in obj){
   if (key === 'pizzaToppings'){
      for (let value in obj[key]){
        let price = obj[key][value];
        if (price <= lowestPrice){
          lowestPrice = price;
        } if (price >= highestPrice){
          highestPrice = price;
        }
        
      }
    }
  }
  return [lowestPrice, highestPrice];
  
};

console.log(toppingsPriceRange(dominos));