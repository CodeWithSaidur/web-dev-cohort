let arr = [12, 23, 34, 45, 56, 67, 89, 90];

let add = 0;

// for loop
for (let i = 0; i < arr.length; i++) {
  add = add + arr[i];
}

// while loop
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

// do while
let d = 0;
do {
  console.log(d);
  d++;
} while (d <= 5);

// for of loop
let ar = [12, 23, 45];
for (let num of ar) {
  console.log(num);
}

// for in

let obj = {
  a: 10,
  b: 20,
  c: 30,
  d: 40,
};

for (const k in obj) {
  console.log(k, obj[k]);
}

// for each

let e = [10, 30, 50];

e.forEach((i) => {
  console.log(i);
});
