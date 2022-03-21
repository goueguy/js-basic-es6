["A", "B"].forEach((l) => console.log(l));
const users = [
  {
    id: 1,
    name: "Marco",
    lastname: "Paul",
    ville: "Abidjan",
    population: 100,
  },
  {
    id: 2,
    name: "Jason",
    lastname: "Park",
    ville: "Abidjan",
    population: 500,
  },
  {
    id: 3,
    name: "Kouame",
    lastname: "Régis",
    ville: "Bouaké",
    population: 1000,
  },
];

const data = users.reduce((previousValue, currentValue) => {
  return previousValue + currentValue.population;
}, 0);

const findOneData = users.findIndex((el) => {
  return el.population > 400;
});

const countries = [14, 20, 50, 100];

const result = (res) => res > 10;

console.log(countries.every(result));
