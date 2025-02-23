class Student_Name {
    constructor(fname, lname) {
      this.fname = fname;
      this.lname = lname;
    }
  
    getFullname() {
      return `${this.fname} And ${this.lname}`;
    }
  }
  
  class Student_Phone_Email extends Student_Name {
    constructor(fname, lname, phone, email) {
      super(fname, lname);
      this.phone = phone;
      this.email = email;
    }
  
    getFullContact() {
      return `${this.phone} And ${this.email}`;
    }
  }
  
  let s1 = new Student_Phone_Email('sabed', 'bar', '9706216141', 'sabed@gmail.com');
  let s2 = new Student_Phone_Email('jabed', 'kar', '9706216142', 'jabed@gmail.com');
  
  console.log(s2.getFullContact()); 
  console.log(s2.getFullname());    
  