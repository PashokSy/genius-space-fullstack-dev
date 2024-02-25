const fs = require("fs");
const http = require("http");
const { readFile } = require("fs/promises");

async function readHelloFile() {
  try {
    const data = await readFile("hello.txt");
    console.log(data.toString());
  } catch (error) {
    console.error(error);
  }
}

readHelloFile();

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
