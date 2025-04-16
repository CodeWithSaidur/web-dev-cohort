var a = 10;
console.log(a);
console.log(a);
a = 10;
console.log(a);
function add(a, b) {
  return a + b;
}
var res = add(12, 12);
console.log(res);
function createUser(user) {
  var _a;
  var timed =
    ((_a = user.lName) === null || _a === void 0
      ? void 0
      : _a.trim()) || '';
}
createUser({
  fName: 'Sabed',
});
function newUser(user) {
  user.fName;
  user.lName;
  user.email;
}
var d = {
  fName: 'Sabe',
  email: 'sasa',
};
newUser(d);
