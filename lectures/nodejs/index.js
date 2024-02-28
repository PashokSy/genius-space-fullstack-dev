const fs = require("fs");
const http = require("http");
const { readFile, appendFile } = require("fs/promises");

async function readHelloFile() {
  try {
    const data = await readFile("hello.txt");
    console.log(data.toString());
  } catch (error) {
    console.error(error);
  }
}
// readHelloFile();

async function appendToFile(fileName, data) {
  try {
    await appendFile(fileName, data, { flag: "w" });
    console.log("Appended to file successfully");
  } catch (error) {
    console.error(error);
  }
}

appendToFile("newFile.txt", "I love node");

http
  .createServer(function (req, res) {
    try {
      fs.readFile("hello.txt", (err, data) => {
        res.writeHead(200, { "Content-type": "text/html" });
        res.write(data);
        return res.end();
      });
    } catch (error) {
      console.error(error);
    }
  })
  .listen(8080);

// http
//   .createServer(function (req, res) {
//     try {
//       fs.readFileSync("hello.txt", (err, data) => {
//         res.writeHead(200, { "Content-type": "text/html" });
//         res.write(data);
//         return res.end();
//       });
//     } catch (error) {
//       console.error(error);
//     }
//   })
//   .listen(8080);
