// Slide 22

const fs = require("fs");

const filename = "email_list.txt";
const email = "brad@pitt.com (Brad Pitt)";

let list = fs.readFileSync(filename, "utf8");
list += "\n" + email;
fs.writeFileSync(filename, list);
console.log(email + " written to file.");