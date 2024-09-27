/* 
Module Two Exercise: Object Methods
Start with exercise-2.md if you haven't read it! 
*/

//  DO NOT EDIT THE BELOW OBJECT // 

const papaJohns = {
  name: "Papa John's",
  slogan: "Better Ingredients. Better Pizza. Papa John's.",
  cuisines: ["italian", "american", "pizza"],
  pizzaToppings: {
    pepperoni: 2,
    peppers: 0.6,
    extraCheese: 1.5,
    olives: 0.5,
    bacon: 3,
    extraSauce: 1,
  },
  numberOfStars: 3.5,
  favorited: false,
  address: "555 Main Street",
  zipcode: 11234,
  acceptsReservations: false,
  printAd: function (topping){
    if (this.pizzaToppings.hasOwnProperty(topping)){
      let toppingPrice = this.pizzaToppings[topping];
      return `"Welcome to Papa John's! We are located at ${this.address}. This week, we are having a sale on ${topping} for $${toppingPrice}. ${this.slogan}"`
    }
  }
}

// DO NOT EDIT THE ABOVE OBJECT // 

// YOUR WORK GOES HERE // 

function grabCategories(obj){
  return Object.keys(obj);
}

// console.log(grabCategories(papaJohns.pizzaToppings));

function verifyValues(object, count){
  const numberValue = Object.keys(object).length;
  return numberValue === count;

}

// console.log(Object.values(papaJohns));

function getToppingsInfo(object){
  let results = [];
  for (let topping in object.pizzaToppings){
    if (object.pizzaToppings.hasOwnProperty(topping)){
      results.push(topping, object.pizzaToppings[topping]);
    }
  }

  return results;
}

console.log(papaJohns.printAd('bacon'));
// console.log(papaJohns.pizzaToppings)

