function main() {

  let name = "saidur";

  function AddTitle() { // Closer or Laical Scope

    console.log(name.concat(" Barbhuiya"));

  }

  AddTitle();

}

main();
