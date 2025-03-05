// Strings

let str = "Hello World!";

console.log(str.concat(124));

console.log(`${str}`); // string interpolation or template lateral

const coder_name = new String("Saidur");

console.log(coder_name.length);

// console.log(coder_name.__proto__, { showHidden: true, depth: null });

console.log(coder_name.charAt(0));

console.log(coder_name.indexOf("ai"));

let newString = "0123456789";

console.log(newString.substring(0, 3));
console.log(newString.slice(-1, 5));

let tr = "    Saidur      ";
console.log(tr.trim()); // yeaha Q () dana parha ha
console.log(tr.length); // yeaha Q nani dana portha ha

const url = " https://developer. mozilla.org/";
console.log(url.replaceAll(" ", ""));

console.log(url.includes("https://" && ".org"));
console.log(url.split('.'));
