// Oppgave 1: Array med norske byer
const norskeByer = [
  'Oslo',
  'Bergen',
  'Trondheim',
  'Stavanger',
  'Tromsø',
  'Kristiansand',
];
console.log(norskeByer);

// Oppgave 2: Array med seks forskjellige tall (minst 3 siffer)
const ids = [123, 456, 789, 321, 654, 987];
console.log(ids);

// (Bonus) oppgave 3: Array med objekter
const people = [
  { firstName: 'Ola', lastName: 'Nordmann', age: 28 },
  { firstName: 'Karen', lastName: 'Hansen', age: 34 },
  { firstName: 'Per', lastName: 'Olsen', age: 19 },
];
console.log(people);

// (Bonus) oppgave 4: Objekt med array
const person = {
  firstName: 'Lise',
  lastName: 'Trulsen',
  age: 26,
  hobbies: ['trening', 'fjelltur', 'programmering']
};

console.log(person);




// oppgave 5: opprett først et tomt array. Deretter gi den "pancake" som første index. så oppdater første index til å heller være "Waffle". Pancake skal da erstattes med Waffles. print ut begge i konsollen

// Opprett tomt array
const food = [];

// Legg til "pancake" som første element
food[0] = 'pancake';
console.log('Før oppdatering:', food[0]); // pancake

// Erstatt "pancake" med "Waffle"
food[0] = 'waffle';
console.log('Etter oppdatering:', food[0]); // Waffle 


// (Bonus) oppgave 6: Legg til flere matretter, og print ut lengden på arrayet.

// Fortsatt fra tidligere
const food = [];

// Legg til én og én rett
food[0] = 'pancake';
food[0] = 'Waffle'; // overskriver pancake
food.push('Pizza');
food.push('Burger');
food.push('Taco');
food.push('Pasta');

// Print ut hele arrayet
console.log('Matretter:', food);

// Print ut lengden på arrayet
console.log('Antall retter:', food.length);

