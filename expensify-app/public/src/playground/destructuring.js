console.log("destructuring")

//
// OBJECT DESTRUCTURING
//

/*
// --------------------------------------------------------

const person ={
    name: "Andrew",
    age: 20,
    location: {
        city: "Porto",
        temp: 0
    }
};

// old way
console.log(person.name +" is "+person.age+".")
if(person.location.city && typeof person.location.temp === "number")
console.log("It is "+ person.location.temp + " degrees in "+person.location.city)

// // old way
// const name = person.name
// const age = person.age

// //Using destructuring
// const {name, age} = person
// const {city, temp} = person.location
// console.log("Destructured:    "+ name +" is "+age+".")
// if(city && typeof temp === "number"){console.log("Destructured:   It is "+ temp + " degrees in "+city)}

//Using destructuring with renaming and defaults
const {name:firstName = "Anonymous", age} = person
const {city, temp: temperature} = person.location
console.log("Destructured:   "+ firstName +" is "+age+".")
if(city && typeof temperature === "number"){console.log("Destructured:   It is "+ temperature + " degrees in "+city)}

const book = {
    title: "book 1",
    author: "jo",
    publisher:{
        // name:"Penguin"
    }
}

const { name: publisherName = "Self-Published" } = book.publisher

console.log(publisherName)

*/
// --------------------------------------------------------



//
// ARRAY DESTRUCTURING
//

const address = ["Ulitsa Parva 69", "Malko Tarnovo", "Malko Tarnovo", "12345"]

// // Old way
// const city = address[1]
// console.log("You are in "+ city+ " "+ address[2]+ " "+ address[0] )

// Destructoring ARRAY
// skip unneeded positions
const [street, city, , /*postalCode*/, theDefaultOfoneMoreItemThatIsNotThere="hmm"] = address;
console.log("You are in "+ city +" on  "+ street + " street   " + theDefaultOfoneMoreItemThatIsNotThere);


const item = ["coffe (iced)", "$2.00", "$2.50", "$2.75"];
const[drink, , medium]= item;
console.log("A medium "+ drink+ " costs " + medium);




