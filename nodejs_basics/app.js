const readline = require("readline");
const fs = require("fs");
const { text } = require("stream/consumers");


// // Taking Inputs
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// rl.question("Please enter your name: ", (name) => {
//   console.log("Hello, " + name + "!");
//   rl.close();
// });

// rl.on('close', () => {
//     console.log("Goodbye!");
//     process.exit(0);
// });

// Reading a file
let textIn = fs.readFileSync("./files/input.txt", "utf-8");
console.log("Text in input.txt: ", textIn);

// Writing to a file
const textWritten = `Data written from input.txt: ${textIn}\ncreated  on ${new Date()}`;
fs.writeFileSync("./files/output.txt", textWritten, "utf-8");
console.log("Data written to output.txt successfully.");