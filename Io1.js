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
  var length = parseInt(userInput[0])

  var elements = userInput[1].split(" ").map(Number)
  
  var count = 0;
  
  for(var j = 0; j<length; j++) {
  var element = elements[j]
  
  count = 0
  
  for (var i = 0; i<length; i++) {
  if(element == elements[i]) {
  count += 1
  
  }
  
  }
  
  if(count == 2) {
  console.log(element)
  
  return
  
  }
  
}
  
 
  //end-here
});