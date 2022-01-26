// 2nd class Manager extends employee properties and methods
// officeNumber
// getRole() // Overridden to return 'Manager'

const Employee = require("./Employee");

// allows class to utilize Employee's properties and methods
class Manager extends Employee {
  constructor(name = '', id, email, officeNumber){
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  //getOfficeNumber
  getOfficeNumber() {
    return this.officeNumber;
  }
  //getRole
  getRole() {
    return "Manager";
  }
}

module.exports = Manager;