// General Formula solving

// Create a function that receives a, b and c as parameters and returns the result of the general formula.
// The general formula is: (-b +- sqrt(b^2 - 4ac)) / 2a
// The function should return an array with the two results.
// also solve imaginary numbers (complex numbers) and return an array with the real and imaginary part of the result.
const generalFormula = (a, b, c) => {
    const x1 = (-b + Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a);
    const x2 = (-b - Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a);

    // imaginary numbers
    if (isNaN(x1) || isNaN(x2)) {
        const real = -b / (2 * a);
        const imaginary = Math.sqrt(4 * a * c - b ** 2) / (2 * a);
        return [real, `${Math.abs(imaginary) === 1 ? '' : imaginary}i`];
    }

    return [x1, x2];
};


// add event listener to form
document.getElementById('form-formula').addEventListener('submit', (event) => {
    event.preventDefault();
    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;
    let c = document.getElementById('c').value;
    let result = generalFormula(a, b, c);
    if (result === null) {
        document.getElementById('result').innerHTML = 'El resultado es un número complejo';
    } else {
        // if second element is string, then it is an imaginary number. join elements with a ±
        const message = result[1].toString().includes('i') ? result.join(' ± ') : result.join(' y ');
        document.getElementById('result').innerHTML = `El resultado es: ${message}`;
    }
});


// ...............................................................................................................


// Game of Paper, Rock and Scissors

// Create a function that receives two strings as parameters and returns the winner of the game.
// The strings can be "piedra", "papel" or "tijera".
// returns 1 if player 1 wins, 2 if player 2 wins and 0 if it's a tie.
const game = (player1, player2 = randomChoice()) => {
    if (player1 === player2) {
        return 0;
    }

    if (player1 === 'piedra') {
        return player2 === 'papel' ? 2 : 1;
    }

    if (player1 === 'papel') {
        return player2 === 'tijera' ? 2 : 1;
    }

    if (player1 === 'tijera') {
        return player2 === 'piedra' ? 2 : 1;
    }
}

// create a function that randomly returns "piedra", "papel" or "tijera"
const randomChoice = () => {
    const choices = ['piedra', 'papel', 'tijera'];
    return choices[Math.floor(Math.random() * choices.length)];
}

// add event listener to form
document.getElementById('form-ppt').addEventListener('submit', (event) => {
    event.preventDefault();
    let player1 = document.getElementById('ppt').value;
    let player2 = randomChoice();
    let result = game(player1, player2);

    document.getElementById('elecciones-ppt').innerHTML = `Jugador 1: ${player1} VS Jugador 2: ${player2}`;
    const resultElement = document.getElementById('result-ppt');

    if (result === 0) {
        resultElement.innerHTML = 'Es un empate';
    } else {
        resultElement.innerHTML = result === 1 ? `Gana tú con ${player1}` : `Gana la machina con ${player2}`;
    }
});


// ...............................................................................................................


// Days, Months and Years since you were born

// Create a function that receives a date as a parameter and returns the number of days, months and years since that date.
// The function should return an array with the number of days, months and years.
// The function should return null if the date is in the future.
const daysMonthsYears = (date) => {
    const today = new Date();
    const birthDate = new Date(date);

    if (birthDate > today) {
        return null;
    }

    const years = today.getFullYear() - birthDate.getFullYear();
    const months = today.getMonth() - birthDate.getMonth();
    // if month is negative, then it is not a full year yet
    if (months < 0) {
        return [today.getDate() - birthDate.getDate(), months + 12, years - 1];
    }
    const days = today.getDate() - birthDate.getDate();
    // if day is negative, then it is not a full month yet
    if (days < 0) {
        return [days + 30, months - 1, years];
    }

    return [days, months, years];
}

// add event listener to form
document.getElementById('form-cumple').addEventListener('submit', (event) => {
    event.preventDefault();
    let date = document.getElementById('cumple').value;
    let result = daysMonthsYears(date);

    if (result === null) {
        document.getElementById('result-cumple').innerHTML = 'No puedes haber nacido en el futuro';
    } else {
        document.getElementById('result-cumple').innerHTML = `Han pasado ${result[0]} días, ${result[1]} meses y ${result[2]} años`;
    }
});


// ...............................................................................................................

// JSON Placeholder Users

// Create a function that gets user dato from the JSON Placeholder API and returns an array.
// could posibly get an input parameter to filter the users by username.
// The function should return an array with the users.
const getUsers = async (username = null) => {
    const url = username ? `https://jsonplaceholder.typicode.com/users?username=${username}` : 'https://jsonplaceholder.typicode.com/users';
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

// add event listener to form
document.getElementById('form-json').addEventListener('submit', async (event) => {
    event.preventDefault();

    // check if submit was triggered by button with id "json-fetch-all".
    // if so, then fetch all users
    // else fetch user by username
    // create a table row for each user with the following data: id, name, username, email
    let data = [];
    if (event.submitter.id === 'json-fetch-all') {
        data = await getUsers();
    }
    else {
        const username = document.getElementById('json').value;
        data = await getUsers(username);
    }

    console.log(data);

    const table = document.getElementById('json-tbody');
    table.innerHTML = '';

    data.forEach((user) => {
        const row = table.insertRow();
        row.insertCell().innerHTML = user.id;
        row.insertCell().innerHTML = user.name;
        row.insertCell().innerHTML = user.username;
        row.insertCell().innerHTML = user.email;
    });
});