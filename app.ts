/**
 * Basic type
 */

//string
let car = "BMW";
let bike: string;

bike = "Yamaha";
// bike = 150; // Error


//number
let num = 10;

//boolean
let isLoading: boolean = false;

//undifined

let body = undefined; // only undefined value


// null
let footer: null;

// any

let person: any;

person = 10;
person = "Hello";
person = true;
person = { name: "John", age: 30 };


//object

let house: {
    address: string,
    color?: string // optional property
} = {
    address: "",
    color: ""
}
house.address = "123 Main St";


// array
let products = []
products.push(1);
products.push("Hello");


//string[]

let names = ["John", "Jane", "Doe"];
let addresses: string[] = [];
addresses.push("123 Main St");

//number[]

let numbers: number[] = [];
numbers = [1, 2, 3,];


// object array

let people: {
    name: string,
    age: number
}[] = [];

people.push({ name: "John", age: 30 });
people.push({ name: "Jane", age: 25 });


//function

const sum = (num1: number, num2: number): number => {
    return num1 + num2;
}

const sub: (num1: number, num2: number) => number = (
    num1, num2
) => num1 - num2

const handle = () => {
    console.log(123)
}


//union
let price: string | number | boolean

price = 100;
price = "100";
price = true;

let body1 : {name: string} | {firstName: string} = {
    name: "John"
}

// Enum
enum Sizes {
    S =  "Small",
    M =  "Medium",
    L =  "Large",
    XL = "Extra Large"
}
let size = Sizes.M;


//interface

// interface State{
//     name: string;
//     isLoading: boolean;
// }

// interface State{
//     age?: number; // optional property
// }

// let state: State = {
//     name: "John",
//     isLoading: false
// }

// Type assertion


type State = {
    name: string;
    isLoading: boolean;
}


let state: State = {
    name: "John",
    isLoading: false
}




type Name = {
    name:String
}
type Age = {
    age: number
}

type Person = Name & Age;
