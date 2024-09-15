/* 
Module One Exercise: Object Syntax & Notation
Start with exercise-1.md if you haven't read it! 
*/

// YOUR WORK GOES HERE //

const chipotle = {
    name: "Chipotle",
    cuisine: ["Mexican"],
    numberOfStars: 4,
    favorited: true,
};

// console.log(chipotle);

chipotle.address = "555 hypoluxo rd";
chipotle.zipcode = 33463;
chipotle.acceptsReservations = false;
chipotle.numberOfStars += 1;
chipotle.favorited = false;
chipotle.cuisine.push("American");

// console.log(chipotle);

function retrieveProperty(object, key){
    if (key in object){
        return object[key];
    } else {return "The information you requested does not exist."}
}

console.log(retrieveProperty(chipotle, "state"));
