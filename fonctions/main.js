const returnMinimum = (min, max) => {
  if (min < max) {
    return min;
  } else {
    return max;
  }
};

// console.log(returnMinimum(0, 10));
// console.log(returnMinimum(0, -10));

const parite = (number) => {
  if (number < 0) {
    return "??";
  } else {
    if (number % 2 == 0) {
      return true;
    } else {
      return false;
    }
  }
};

const pariteRecursive = (number) => {
  if (number % 2 == 0) {
    return true;
  } else if (number % 2 == 1) {
    return false;
  } else if (number > 0) {
    return pariteRecursive(number - 2);
  } else {
    return pariteRecursive(-number);
  }
};

// console.log(pariteRecursive(50));
// console.log(pariteRecursive(75));
// console.log(pariteRecursive(-1));
let countB = 0;
const countBs = (word) => {
  for (let init = 0; init < word.length; init++) {
    if (word[init] == "B") {
      countB++;
    }
  }
  return countB;
};

console.log(countBs("BBC"));
let countLetter = 0;
const countChar = (word, letter) => {
  for (let init = 0; init < word.length; init++) {
    if (word[init] == letter) {
      countLetter++;
    }
  }
  return countLetter;
};

console.log(countChar("kakkerlak", "k"));
