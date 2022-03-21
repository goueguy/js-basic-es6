// const listOfNumbers = [2, 3, 5, 7, 11];
// listOfNumbers.unshift(25);

// let userInfo = {
//   name: "Goueguy",
//   lastName: "Jean-Louis A",
//   localisation: "Cocody",
//   events: ["GAME", "PROGRAMMATION WEB & MOBILE", "TV", "FOOTBALL"],
// };

// console.log(userInfo.name, userInfo.lastName, userInfo.localisation);

// userInfo.events.forEach((element) => {
//   console.log(element);
// });

// let anObject = { left: 1, right: 2 };
// delete anObject.left;
// console.log(anObject);

// console.log(anObject.keys());

// let journal = [
//   {
//     events: ["work", "touched tree", "pizza"],
//   },
//   {
//     events: ["work", "ice cream", "cauliflower"],
//   },
//   {
//     events: ["weekend", "cycling", "break", "peanuts", "beer"],
//   },
// ];
// const phi = (table) => {
//   return (
//     (table[3] * table[0] * table[2] * table[1]) /
//     Math.sqrt((table[2] + table[3]) * (table[0] + table[1]))
//   );
// };

// const tableFor = (event, journal) => {
//   let table = [0, 0, 0, 0];

//   for (let i = 0; i < journal.length; i++) {
//     let entry = journal[i],
//       index = 0;
//     if (entry.events.includes(event)) index += 1;
//     if (entry.squirrel) index += 2;
//     table[index] += 1;
//   }
//   return table;
// };

// const arrayNumber = [0, 1, 2, 3, 4, 5, 10];

// const remove = (array, index) => {
//   return array.slice(0, index).concat(array.slice(index + 1));
// };

// console.log(remove(["A", "B", "C", "D", "E"], 2));

// console.log("okay \n".trim());

// const dayList = [
//   "LUNDI",
//   "MARDI",
//   "MERCREDI",
//   "JEUDI",
//   "VENDREDI",
//   "SAMEDI",
//   "DIMANCHE",
// ];

// for (let init = 0; init < dayList.length; init++) {
//   console.log(dayList[init]);
// }
// let list = "";

/* dayList.forEach((element) => {
  list += `<li>${element}</li>`;
}); */

// let i = 0;
// const verifyDay = ["VENDREDI", "SAMEDI", "DIMANCHE"];
// for (let value of dayList) {
//   if (verifyDay.includes(value)) {
//     list += `<li>${value}</li>`;
//   }
// }

// document.querySelector("#app").innerHTML = list;

// let sentence = "a b c d e f g h i j";

// let letter = sentence.split(" ");

// console.log(letter.join(". "));

// console.log("A".repeat(3));

// const statut = ["A", "B", "C"];

// console.log(...statut);

function randomPointOnCircle(radius) {
  let angle = Math.random() * 2 * Math.PI;
  return { x: radius * Math.cos(angle), y: radius * Math.sin(angle) };
}

console.log(randomPointOnCircle(2));

let randomNumber = Math.floor(Math.random() * 10);

console.log(randomNumber);
