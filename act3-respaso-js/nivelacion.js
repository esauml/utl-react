// Uso de variables
// var nombre = 'Daniel';
// document.write(nombre);

// Utilities
const line = () => document.write('<br><hr><br>');

// Nuevas formas de para definir variables
let nombre = 'Daniel';
const apellido = 'García';

function saludo() {
    document.write('Hola ' + nombre);
}

saludo();

// var nombre = 'Daniel';

line();
// ...............................................

// Uso de funciones

// function addition(a, b) {
//     return a + b;
// }

// const addition = (a, b) => {
//     return a + b;
// }

const addition = (a, b) => a + b;

const a = 5;
const b = 10;
const result = addition(a, b);

document.write(`${a} + ${b} = ${result}`);


line();
// ...............................................

// Objetos JSON

const user = {
    name: 'Daniel',
    age: 30,
    email: 'esaum@email.com',
};

document.write(`Usuario
    nombre : ${user.name}
    edad : ${user.age}
    email : ${user.email}`);

// redefine usando Object Destructuring
const { name, age, email } = user;


line();
// ...............................................

// Function with Object Destructuring

const area = ({ base, height }) => base * height;

const rectangle = {
    base: 10,
    height: 20,
};

const resultArea = area(rectangle);

document.write(`Object Rectangle
    base : ${rectangle.base}
    height : ${rectangle.height}
    Area : ${resultArea}`);

line();
// ...............................................

// Using spread operator (...) to copy an object

const obj1 = {
    a: 1,
    b: 2,
    c: 3,
};

const obj2 = {
    d: 4,
    e: 5,
}

const copiedObj = { ...obj1, ...obj2 };

document.write(`Copied Object
    a : ${copiedObj.a}
    b : ${copiedObj.b}
    c : ${copiedObj.c}
    d : ${copiedObj.d}
    e : ${copiedObj.e}`);

line();
// ...............................................

// Arrays Destructuring

const array = [1, 2, 3, 4, 5];

const [first, second, third, ...rest] = array;

document.write(`Array
    first : ${first}
    second : ${second}
    third : ${third}
    rest : ${rest}`);



// destructuring omitting elements in array

const strArray = ['Ana', 'Luis', 'Daniel', 'Maria', 'Jose'];

const [firstE, , thirdE] = strArray;
const [, secondE, , forthE] = strArray;

document.write(`String Array
    first : ${firstE}
    third : ${thirdE}`);

document.write(`String Array
    second : ${secondE}
    forth : ${forthE}`);

line();
// ...............................................

// Using spread operator (...) to copy an array

const array1 = [1, 2, 3, 4, 5];
const array2 = [6, 7, 8, 9, 10];

const copiedArray = [...array1, ...array2];

document.write(`Array 1 : ${array1}`);
document.write(`Array 2 : ${array2}`);
document.write(`Copied Array : ${copiedArray}`);

line();
// ...............................................

// Template Literals

const years = new Date().getFullYear() - 1989;

const message = `Hello, my name is Daniel García and I'm ${years} years old`;

document.write(message);

line();
// ...............................................

// Intervals

document.write('Intervals');

const hello = () => document.write('Hello World');

// setInterval(hello, 1000);

// // inline callback
// setInterval(() => {
//     document.write('Hello World')
// }, 1000);

line();
// ...............................................

// Promises

const division = (a, b) => new Promise((resolve, reject) => {
    if (b === 0) {
        reject('Cannot divide by zero');
    }

    resolve(a / b);
});

const divisionPromise = division(10, 0);

document.write(`Division Promise : ${divisionPromise}`);

divisionPromise
    .then(result => document.write(result))
    .catch(error => document.write(error));

line();
// ...............................................

// Http Requests

document.write('Http Requests');

const url = 'https://jsonplaceholder.typicode.com/users/1';
const promise = fetch(url);

promise
    .then(response => response.json())
    .then(user => console.log(`User
        id : ${user.id}
        name : ${user.name}
        email : ${user.email}`));

line();
// ...............................................

// Promises with axios

document.write('Promises with axios');

axios.get('https://jsonplaceholder.typicode.com/users/1')
    .then(response => json = response.data)
    .then(user => console.log('User', user));

line();
// ...............................................

// Async Await to make Http Requests

document.write('Async Await to make Http Requests');

const asyncFunction = async () => {
    const { data: user } = await axios.get('https://jsonplaceholder.typicode.com/users/1');
    console.log('User with Async Await', user);
}

asyncFunction();

line();
// ...............................................

// Array Methods

document.write('Array Methods');

const arrayMethods = [1, 2, 3, 4, 5];

// map
const newArray = arrayMethods.map(item => item * 2);
document.write(`New Array : ${newArray}`);

// filter
const filteredArray = arrayMethods.filter(item => item % 2 === 0);
document.write(`Filtered Array : ${filteredArray}`);

// reduce
const reducedArray = arrayMethods.reduce((total, item) => total + item, 0);
document.write(`Reduced Array : ${reducedArray}`);

// find
const foundArray = arrayMethods.find(item => item === 3);
document.write(`Found Array : ${foundArray}`);

// some
const someArray = arrayMethods.some(item => item === 3);
document.write(`Some Array : ${someArray}`);

// every
const everyArray = arrayMethods.every(item => item === 3);
document.write(`Every Array : ${everyArray}`);



line();
// ...............................................



