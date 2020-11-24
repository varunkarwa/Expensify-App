// const person = {
//     name: 'Varun',
//     age:20,
//     location:{
//         city:'Bhusawal',
//         temp:96
//     }
// };

// const {name:firstName = 'Anonymous',age} = person;
// console.log(`${firstName} is ${age}.`)

// const {city,temp:temperature} = person.location;
// if(city && temperature){
//     console.log(`It's ${temperature} in ${city}`)
// }

const address = ['1299 S Juniper Street','Philadelphia','Pennysylvania','19147'];

const [ , city, state = 'New York'] = address;

console.log(`You are in ${city} ${state}.`);