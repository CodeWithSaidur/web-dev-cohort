let a: number = 10;
console.log(a);

console.log(a);

a = 10;
console.log(a);

function add(a: number, b: number) {
  return a + b;
}

let res: number = add(12, 12);

console.log(res);

function createUser(user: {
  fName: string;
  lName?: string;
}) {
  let timed: string = user.lName?.trim() || '';
}

createUser({
  fName: 'Sabed',
});

interface user {
  fName: string;
  lName?: string;
  email: string;
}

function newUser(user: user) {
  user.fName;
  user.lName;
  user.email;
}

const d: user = {
  fName: 'Sabe',
  email: 'sasa',
};

newUser(d);

