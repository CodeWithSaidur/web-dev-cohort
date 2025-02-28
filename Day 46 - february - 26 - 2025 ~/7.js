function Alert(msg, daley) {
  let Time = setTimeout(() => {  // store setTimeout in a variable
    console.log(`Hello ${msg}`);
  }, daley * 1000);
}

Alert("Saidur", 5);
