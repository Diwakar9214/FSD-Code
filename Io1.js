// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 

  let [num1,num2]=userInput[0].split(' ').map(number=>Number(number))

  function calculateHCF(a, b) {
    // Ensure both numbers are positive
    a = Math.abs(a);
    b = Math.abs(b);

    // Apply the Euclidean algorithm
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }

    // At this point, 'a' contains the HCF
    return a;
}



// Calculate the HCF
const hcf = calculateHCF(num1, num2);
console.log("HCF:", hcf); // Output: 12
});