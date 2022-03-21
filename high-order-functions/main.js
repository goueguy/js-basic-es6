let total = 0,
  count = 1;
const range = (start, end) => {
  for (let i = start; i <= end; i++) {
    total += i;
  }
  return total;
};
console.log(range(1, 10));

let labels = [];
let i = 0;
const repeat = (n) => {
  while (i < n) {
    labels.push(`UNIT ${i + 1}`);
    i++;
  }
  return labels;
};

const tasks = [
  {
    id: 1,
    title: "TASK 1",
    content: "Hello task one",
    done: false,
    poids: 10,
    priority: "medium",
  },
  {
    id: 2,
    title: "TASK 2",
    content: "Hello task two",
    done: true,
    poids: 8,
    priority: "high",
  },
  {
    id: 3,
    title: "TASK 3",
    content: "Hello task three",
    done: false,
    poids: 45,
    priority: "medium",
  },
];

//map

tasks.map((element) => {
  console.log(element);
});

let shoppingCart = [
  {
    product: "phone",
    qty: 1,
    price: 500,
  },
  {
    product: "Screen Protector",
    qty: 1,
    price: 10,
  },
  {
    product: "Memory Card",
    qty: 2,
    price: 20,
  },
];

//filter
const filter = tasks.filter((element) => element.done == true);
console.log(filter);
//reduce

let reduce = shoppingCart.reduce((previous, current) => {
  //return previous + current.qty * current.price;
  return previous + current.price * current.qty;
}, 0);

console.log(reduce);

const array = [1, 2, 4, 15, 100];

const result = array.find((a) => {
  return a > 50;
});

console.log(result);

const arr = [29, 46, 86.5];

let sum = arr.reduce((current, value) => {
  return current + value;
});

console.log(sum);
