const Phrase = {
  greeting: "hello",
  pronoun: "I",
  be: "am",
  fullName: "Goueguy Jean-Louis Alexis",
};

let { greeting, pronoun, be, fullName } = Phrase;
// ({ greeting, pronoun, be, fullName } = Phrase);
console.log(fullName);

const Person = {
  name: "GOUEGUY JEAN-LOUIS ALEXIS",
  country: "IVORY COAST",
  job: "Developer",
};

let { name: nomComplet, country: pays, job: profession = "Designer" } = Person;
console.log(nomComplet, pays, profession);

let prop = "name";
const User = {
  name: "AKLADE Kouassi Sosthène",
  country: "IVORY COAST",
};

let { ["name"]: nom, ["country"]: place } = User;

console.log(nom);

const Utilisateur = {
  completeName: "KOUA PAUL",
  place: { country: "Congo", city: "Kinshasa" },
  job: "Designer",
  hobbies: ["Music", "Football", "Technology watch"],
};

const {
  completeName,
  place: { country, city },
  hobbies,
} = Utilisateur;

console.log(Math.floor(Math.random() * 10));

let array = ["A", "B", "C", "D"];

for (let i = array.length; i >= 0; i--) {
  console.log(array[i]);
}

let sum = (...args) => {
  return args.filter((e) => {}).reduce((prev, current) => {});
};
