const buf = new Buffer.alloc(5, "a", "ascii");
const strBuf = new Buffer.from("I love Ukraine");
const bufCpy = new Buffer.from(buf);
const bufTen = new Buffer.alloc(10, 0);

console.log(buf);
console.log(strBuf);
console.log(bufCpy);
console.log(strBuf[0]);
console.log(strBuf.toString());
console.log(strBuf.toString("hex"));
console.log(strBuf.toJSON());
console.log(bufTen.toJSON());

const bufHi = new Buffer.from("Hi!");
console.log(bufHi.toString());
bufHi[1] = "e";
console.log(bufHi.toString());
bufHi[1] = 101;
console.log(bufHi.toString());
bufHi[2] = 121;
console.log(bufHi.toString());
bufHi[5] = 11121;
console.log(bufHi.toString());
bufHi.write("Hello");
console.log(bufHi.toString());

const wordBuf = new Buffer.from("Banana Hama");
const cathBuf = new Buffer.from("Not sure Turtle!");
console.log(wordBuf.toString());
console.log(cathBuf.toString());
wordBuf.copy(cathBuf);
console.log(wordBuf.toString());
console.log(cathBuf.toString());
