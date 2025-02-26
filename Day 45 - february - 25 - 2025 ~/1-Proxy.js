let p1 = {
  name: "Saidur",
  age: 26,
  password: "54545454",
};

const p1_proxy = new Proxy(p1, {
  get(target, prop) {
    if (prop === "password") {
      return "404";
    }
    return target[prop];
  },
});

console.log(p1_proxy.password);
