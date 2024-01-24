// Slide 25
const fs_promises = require('fs').promises;

fs_promises.readFile("email_list.txt", "utf8")
  .then( list => console.log(list) )
  .catch( error => console.log(error) );

const filename = "email_list.txt";
const email = "jennifer@anniston.com (Jennifer Anniston)";

fs_promises.readFile(filename, "utf8")
  .then(list => {
    list += "\n" + email;
    fs_promises.writeFile(filename, list);
  })
  .then( console.log( email + "written to file." ))
  .catch( error => console.log(error) );