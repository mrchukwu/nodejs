const readline = require("readline");
const fs = require("fs");
const { text } = require("stream/consumers");


// // Taking Inputs
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
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
// console.log("Text in input.txt: ", textIn);

// Writing to a file
const textWritten = `Data written from input.txt: ${textIn}\ncreated  on ${new Date()}`;
fs.writeFileSync("./files/output.txt", textWritten, "utf-8");
// console.log("Data written to output.txt successfully.");

//Readiing and writing to a file asynchronously
fs.readFile('./files/start.txt', 'utf-8', (err, data1) => {
    // console.log(data1);
    fs.readFile(`./files/${data1}.txt`, 'utf-8', (err, data2) => {
        // console.log(data2);
        fs.readFile(`./files/append.txt`, 'utf-8', (err, data3) =>{
            // console.log(data3);

            fs.writeFile("./files/output.txt", `${data2}\n${data3}\ncreated on ${new Date()}`, (err) => {
                if(err){
                    console.error("Error writing to output.txt:", err);
                }else{
                    console.log("Data written to output.txt successfully.");
                }
            })
        })
    })
})