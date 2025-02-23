function removePassword(user) {
  // Remove password property
  if (user.hasOwnProperty("password")) {
    delete user.password;
  }
}

let user = {
  username: "Sabed",
  password: 1235,
};

removePassword(user);

console.log(user);
