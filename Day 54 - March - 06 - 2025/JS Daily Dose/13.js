// Date
let now = new Date();

console.log(now.toString());
console.log(now.toDateString());
console.log(now.toISOString());
console.log(typeof now);

let create_a_date = new Date("01-14-2024");
console.log(create_a_date.toLocaleDateString());

let TimeStamp = Date.now();
console.log(TimeStamp);


let now2 = new Date()
console.log(`${now2.getDate()}`);
console.log(`${now2.getDay()}`);
