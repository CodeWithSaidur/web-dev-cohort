let user = {
  name: "sabed",
  age: 25,
  password: "1234",
};

// introduction to proxy
let proxy_User = new Proxy(user, {
  get(target, property) {
    if (property === "password") {
      throw new Error("You Can't Access Password");
    }
    return target[property];
  },
  set(target, property, user) {},
});
console.log(proxy_User.password);
