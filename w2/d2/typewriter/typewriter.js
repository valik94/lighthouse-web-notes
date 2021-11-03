const sentence = "hello there from lighthouse labs";
let timer = 0
for (const char of sentence) {
  setTimeout(() => {
    console.log(char), timer
    timer+=50
  });
}



// for (const char of sentence) {
//   setTimeout(() => {
//     process.stdout.write(char);
//   }, 1000)
// }
