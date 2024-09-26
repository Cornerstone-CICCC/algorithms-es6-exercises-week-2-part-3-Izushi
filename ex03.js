// Exercise 3: Set
// Instructions: Create a Set named `uniqueNumbers` and add some numbers to it using .add(), including some duplicates. 
// Verify that the Set only keeps unique values by logging it to the console.

const uniqueNumbers = new Set();

// Your code here
const randomNumArr = [1, 1, 2, 2, 3, 3, 4, 5, 5, 6, 6];

randomNumArr.forEach(num => {
  uniqueNumbers.add(num);
})

console.log(uniqueNumbers);
