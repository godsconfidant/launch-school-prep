// Write code that checks whether the string byteSequence contains the character x

let byteSq= 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';
let regex = /x/g
let hasChar = byteSq.match(regex);

console.log(hasChar)

let inc = byteSq.includes('x');
console.log(inc);