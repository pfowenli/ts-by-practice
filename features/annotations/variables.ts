// Array
let truths: boolean[] = [false, true, false];
let continents: string[] = ['Asia', 'Europe', 'Africa'];
let myNumbers: number[] = [1, 3, 5, 2.4];

// Class
class Country {}
let country: Country = new Country();

// Object literal
let coordinate: { longitude: number; latitude: number } = {
    longitude: 13.404954,
    latitude: 52.520008
};

// Function
const formFullName: (firstName: string, lastName: string) => string = (firstName: string, lastName: string) => `${firstName} ${lastName}`;

// When annotations should be used
// 1) function that returns 'any' type
let jsonString = '{"firstName": "Pete", "lastName": "Mitchell"}';
let person: { firstName: string; lastName: string } = JSON.parse(jsonString);
console.log(person);

// 2) declare a variable without initialize it on one line
let callSigns = ['Maverick', 'Rooster', 'Hangman', 'Phoenix'];
let foundCallSign: boolean;

for (const callSign of callSigns) {
    if (callSign === 'Iceman') {
        foundCallSign = true;
        break;
    }
}

// 3) variable whose type cannot be correctly inferred
let years = [1986, 2020, 2022];
let yearBeforeTwentyOneCentury: string | number = '1999';

for (const year of years) {
    if (year <= 2000) {
        yearBeforeTwentyOneCentury = year;
    }
}
