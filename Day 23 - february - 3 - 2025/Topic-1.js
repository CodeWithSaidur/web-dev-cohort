let a = "Hello World!";

console.log(a.length);

console.log(a.toUpperCase());
console.log(a.toLowerCase());

console.log(a.indexOf("l"));
console.log(a.lastIndexOf("l"));

console.log(a.includes("World!"));
console.log(a.startsWith("He"));
console.log(a.endsWith("!"));

console.log(a.slice(1,3));
console.log(a.substring(1,4));

let s = "Hello World ! hello World!  "

console.log(s.trim());
console.log(s.replace('World','Sabed'));
console.log(s.replaceAll('World',"Sabed"));

console.log(s.charAt(6));
console.log(s.charCodeAt(6));
console.log(s.at(-5));
