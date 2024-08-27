const randomNumber = Math.random();
if (randomNumber >= 0.7) {
  alert("the 0.7");
}
const numbers = [1, 2, 3, 5, 4];
for (let index = 0; index < numbers.length; index++) {
  console.log(numbers[index]);
}
for (const num of numbers) {
  console.log(num);
}

let counter = 0;
while (counter < numbers.length) {
  console.log(numbers[counter]);
  counter++;
}

for (let index = numbers.length - 1; index >= 0; index--) {
  console.log(numbers[index]);
}
const randomNumber2 = Math.random();
console.log(randomNumber);
console.log(randomNumber2);
if (
  (randomNumber2 > 0.7 && randomNumber2 > 0.7) ||
  randomNumber <= 0.2 ||
  randomNumber2 <= 0.2
) {
  alert("grater 0.7");
}
