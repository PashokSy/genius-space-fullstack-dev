const fs = require("fs");
const http = require("http");
const {
  readFile,
  appendFile,
  writeFile,
  rename,
  unlink,
} = require("fs/promises");

const deleted = "./deleted.txt";

async function readHelloFile() {
  try {
    const data = await readFile("hello.txt");
    console.log(data.toString());
  } catch (error) {
    console.error(error);
  }
}
readHelloFile();

async function appendToFile(fileName, data) {
  try {
    await appendFile(fileName, data, { flag: "w" });
    console.log("Appended to file successfully");
  } catch (error) {
    console.error(error);
  }
}
appendToFile("newFile.txt", "I love node");

async function writeToFile(fileName, data) {
  try {
    await writeFile(fileName, data);
    console.log("Write to file successfully");
  } catch (error) {
    console.error(error);
  }
}
writeToFile("writeFile.txt", "I love to write");

async function renameFile(from, to) {
  try {
    await rename(from, to);
    console.log(`File ${from} renamed to ${to}`);
  } catch (error) {
    console.error(error);
  }
}
renameFile("writeFile.txt", "renamedFile.txt");

// async function deleteFile(fileName) {
//   try {
//     await unlink(fileName);
//     console.log(`File ${fileName} deleted`);
//   } catch (error) {
//     console.error(error);
//   }
// }
// deleteFile("deleted.txt");

fs.open("newFile.txt", "a", (err, file) => {
  if (err) throw err;

  fs.write(file, "fs write", (err) => {
    if (err) throw err;
    console.log("fs content added to the file");
    fs.close(file, (err) => {
      if (err) throw err;
      console.log("fs file closed ");
    });
  });
});

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
