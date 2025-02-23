// You need to implement the Library constructor function and its prototype methods

function Library() {
    // Initialize books property
    this.books = [];
  }
  
  // Define addBook method on Library's prototype
  Library.prototype.addBook = function (book) {
    this.books.push(book);
  };
  // Define findBook method on Library's prototype
  Library.prototype.findBook = function (title) {
    if (this.books.includes(title)) {
      return 'Book found'
    }else{
      return 'Book not found'
    }
  };

const myLibrary = new Library();
myLibrary.addBook("JavaScript Basics");
console.log(myLibrary.findBook("JavaScript Basics")); // true
console.log(myLibrary.findBook("Python Basics")); // false
