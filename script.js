// function constructPerson(personName,personHobbies, personGender) {
//     return{
//         name: personName,
//         gender: personGender,
//         hobbies: personHobbies,
//         eat : function(meal){
//             return(meal)
//         },
//     }
// }


// let idCard1 = {
//     name:
//         gender:
//     age:
//         interests: [],
//     bio: function () {
//         console.log(`${this.name} is ${this.age} years old. i like ${this.interests}`)
//     },
//     greet: function () {
//         console.log(`Hi, I am ${this.name}`)
//     }
// }


// function constructIdCard(stdName, stdGender, stdAge, stdInterests) {
//     return {
//         name: stdName,
//         gender: stdGender,
//         age: stdAge,
//         interests: [stdInterests],
//         bio: function () {
//             console.log(`${this.name} is ${this.age} years old. i like ${this.interests}`)
//         },
//         greet: function () {
//             console.log(`Hi, I am ${this.name}`)
//         }
//     }
// }


// function constructCar(companyName, carModel, ownerName, carFeatures){
//     return{
//         name: companyName,
//         model: carModel,
//         owner: ownerName,
//         features: [carFeatures],
//         engine: function(){
//             console.log(`${this.name}, ${this.model} says full the fuel tank to start`);
//         }
//         }
// }
// let car = constructCar("Suzuki", "Alto 2015", "Shehzad", ["speed", "requires less fuel"]);

// function wendingMachine(money, numbs) {
//     let items = [
//         {
//             name: "Lays",
//             price: 40
//         },
//         {
//             name: "Potato Stick",
//             price: 20
//         },
//         {
//             name: "Peanuts",
//             price: 30
//         },
//         {
//             name: "Dairy milk",
//             price: 50
//         },
//         {
//             name: "Tuc",
//             price: 20
//         }
//     ]
//     let requestedItem = items[numbs];
//     console.log(requestedItem);
//     if (money > requestedItem.price) {
//         return requestedItem.name;
//     } else {
//         return null;
//     }
// }


function textileFactory(brandName, clothStuff, clothprice, clothColor, printorNot, printType){
    return{
        name: brandName,
        stuff: clothStuff,
        price: clothprice,
        color: [clothColor],
        isprinted: printorNot,
        printed: printType,
        textileMachine: function(){
            console.log(`${this.name}, ${this.stuff} in ${this.color} with ${this.printed}print is in process.`);
        },
        greet: function(){
            console.log(`${this.name}, ${this.stuff} in ${this.price} is ready!!`);
        }
    }
}
let factory= textileFactory("Saffire","Cotton", "2000","Pink, OffWhite", true, "floral");









