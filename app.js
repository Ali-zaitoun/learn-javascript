// const numbers = [1, 2, 3, 4];
// console.log(numbers);

// const listItems = document.querySelectorAll("li");
// console.log(listItems);

// const arrayListItems = Array.from(listItems);
// console.log(arrayListItems);

// const hobbies = ["cooking", "sport"];
// console.log(hobbies);

// const personData = [24, "ali", { moreDetail: [] }];
// console.log(personData[1]);

// const analyticsData = [
//   [1, 1.6],
//   [-5.4, 5],
// ];

// for (const data of analyticsData) {
//   for (const dataPoint of data) {
//     console.log(dataPoint);
//   }
// }

// const hobbies = ["sport", "cooking"];
// hobbies.splice(1, 0, "coding");
// console.log(hobbies);

// hobbies.splice(1,3)
// hobbies.slice(  )
// console.log(hobbies)

// const numbers = [
//   1, 2, 8.5, 3.5, 4, 4, 5, 5, 5, 6, 6, 9, 8, 2, 5, 2.2, 2.1, 2.1,
// ];
// console.log(numbers.indexOf(3.5));

const prices = [10.99, 5.99, 3.99, 6.99];
const tax = 0.19;
const taxAdjustPrices = [];

// for (const price of prices) {
//   taxAdjustPrices.push(price + (1 + tax));
// }
// console.log(taxAdjustPrices);

// prices.forEach((price, index, prices) => {
//   const priceObj = {
//     index: index,
//     taxAdjPrices: price + (1 + tax),
//   };
//   taxAdjustPrices.push(priceObj);
// });
// console.log(taxAdjustPrices);

// const sortedPrice = prices.sort((a, b) => {
//   if (a > b) {
//     return 100;
//   } else if (a === b) {
//     return 5;
//   } else {
//     return -1;
//   }
// });
// console.log(sortedPrice);

// const filteringArray = prices.filter((price, index, prices) => {
//   return price > 6;
// });
// console.log(filteringArray);

// const reduceArray = prices.reduce((previousValue, currentValue) => {
//   return previousValue + currentValue;
// }, 0);
// console.log(reduceArray);

// const joinArrayPrices = prices.join("|");
// console.log(joinArrayPrices);

// const nameFragments = ["max", "shwartz", "ali"];

// const copiedNameFragment = [...nameFragments];
// console.log(copiedNameFragment[0]);

// const person = [
//   { name: "ali", age: 24 },
//   { name: "max", age: 40 },
// ];

// const copiedPerson = [
//   ...person.map((person) => ({ ali: person.name, omar: person.age })),
// ];
// person.push({ name: "ahmad", age: 30 });

// console.log(person, copiedPerson);

// const nameData = ["ali", "zaitoun", "MR", 24];
// const [firstName, lastName, ...otherInformation] = nameData;
// console.log(firstName, otherInformation);
// console.log(lastName);

// const person1 = { name: "ali" };
// const person2 = { name: "abd" };
// const personData = new Map([
//   [person1, [{ myJob: "software", age: 24 }]],

// ]);
// personData.set(person2, [{ myJob: "photography", age: 50 }])
// // console.log(personData);

// // console.log(personData.get(person1));

// for (const [key, value] of personData.entries()) {
//   console.log(key , "=>" , value);
// }

// const persons = new WeakSet();
// const persons = new WeakMap();
// persons.a

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const numbersGreater5 = numbers.filter((number) => {
  return number > 5;
});

console.log(numbersGreater5);
const mappedNumbers = numbers.map((number) => {
  return number * 2;
});
console.log(mappedNumbers);

const reduceNumbers = numbers.reduce((initialVal, currentValue) => {
  console.log(initialVal);
  return initialVal + currentValue;
}, 100);

console.log(reduceNumbers);

const findMax = (numbers) => {
  let currentMax = numbers[0];
  for (const number of numbers) {
    if (number > currentMax) {
      currentMax = number;
    }
  }
  return currentMax;
};

console.log(findMax(numbers));

const findMaxMin = (numbers) => {
  let currentMax = numbers[0];
  let currentMin = numbers[0];
  for (const number of numbers) {
    if (number > currentMax) {
      currentMax = number;
    }
    if (number < currentMin) {
      currentMin = number;
    }
  }
  return [currentMax, currentMin];
};

const [biggestNumber, smallestNumber] = findMaxMin(numbers);

console.log(biggestNumber, smallestNumber);

const set = new Set();
set.add(5);
set.add(5);
set.add(55);

console.log(set);
