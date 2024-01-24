// Slide 12
// set variables
const investment = 10000;
const rate = 7.5;
const years = 10;

// calculate future vallue
let futureValue = investment;
for(let i = 1; i <= years; i++) {
  futureValue += futureValue * rate / 100;
}

console.log(`Investment amount: ${investment}`);
console.log(`Interest Rate: ${rate}`);
console.log(`Years: ${years}`);
console.log(`Future Value: ${futureValue.toFixed(2)}`);