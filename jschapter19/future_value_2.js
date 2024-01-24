// Slide 14
// set variables
const investment = parseFloat(process.argv[2]);
const rate = parseFloat(process.argv[3]);
const years = parseInt(process.argv[4]);

// input validation
if(isNaN(investment) || isNaN(rate) || isNaN(years)) {
  console.log("ERROR: Please pass valid numbers for all argments.");
  proess.exit();
}

// calculate future vallue
let futureValue = investment;
for(let i = 1; i <= years; i++) {
  futureValue += futureValue * rate / 100;
}

console.log(`Investment amount: ${investment}`);
console.log(`Interest Rate: ${rate}`);
console.log(`Years: ${years}`);
console.log(`Future Value: ${futureValue.toFixed(2)}`);