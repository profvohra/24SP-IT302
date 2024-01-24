// Slide 21
const fs = require("fs");

const filename = "email_list.txt";
const new_email = "mike@murach.com (Mike Murach)";

fs.readFile(filename, "utf8", (error, list) => {
  if(error) throw error;
  else {
    // write to this file!
    list += "\n" + new_email;
    fs.writeFile(filename, list, error => {
      if(error) throw error;
      console.log(new_email + " written to file.");
    });
  }
});