//Have our file print out these three words 4311o th3r3 w0r1d three seconds after the file is run.
//CHALLENEGE 1
setTimeout(() => {
  console.log("4311o th3r3 w0r1d");
}, 3000);

//Challenge 2 Instead of printing the entire sentence together, have our code print out each of the three words one at a time, 1 second apart.
setTimeout(() => {
  console.log("4311o"), 1000,
  console.log("th3r3"), 1000,
  console.log("w0r1d"), 1000
});
