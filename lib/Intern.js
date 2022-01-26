// school
// getSchool()
// getRole() // Overridden to return 'Intern'

const Employee = require("./Employee");

// allows class to utilize Employee's properties and methods
class Intern extends Employee {
  constructor(name = '', id, email, school){
    super(name, id, email);
    this.school = school;
  }
  getSchool() {
    return this.school;
  }
  getRole() {
    return "Intern";
  }
};

module.exports = Intern;