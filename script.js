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


function mobileFactory(brandName,price,mobilemodel,ownerName,mobilefeatures,mobileColor){
    return{
        name: brandName,
        range: price,
        model: mobilemodel,
        owner: ownerName,
        features: mobilefeatures,
        color: mobileColor,
        capture: function(){
            console.log(`${this.name} ${this.model} can capture a super zoom picture with perfect pixcels!!`);
        }
    }
}
let mobile= mobileFactory("Huawie", "38000", "P30pro", "Suhail", ["Iconic Triple Camera","3650mAh Battery","Super Spectrum Sensor"], ["Breathing Crysta", "Aurora"]);



function PepsiFactory(productName,productflavor,productPrice,departmentName,){
    return{
        name: productName,
        flavor: productflavor,
        price: productPrice,
        department: departmentName,
        productPreaparation: function(){
            console.log(`${this.name} can be prepared only in ${this.department}`);
        },
        wrapp: function(){
            console.log(`${this.name} is ready to deliver!`);
        }
    }
}
let product= PepsiFactory("Lays","Cheese", 30, "Snacks Department");

function pizzaFactory(pizzaSize, pizzaFlavor, pizzaToppings, additionalFlavor,){
    return{
        size: pizzaSize,
        flavor: pizzaFlavor,
        toppings: pizzaToppings,
        addFlavor: additionalFlavor,
        baked: function(){
            console.log(`Your ${this.flavor} pizza with ${this.toppings} toppings is ready to eat`);
        }
    }
}
let pizza= pizzaFactory("Large", "BBQ", ["Bacon","sausage", "chicken", "mushrooms", "red pepper"],"Extra Cheese");








