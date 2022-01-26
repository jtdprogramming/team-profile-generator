const Employee = require("./Employee");

// allows class to utilize Employee's properties and methods
class Engineer extends Employee {
  constructor(name = '', id, email, github){
    super(name, id, email);
    this.github = github;
  }
  //getgithub
  getGithub() {
    return this.github;
  }
  //getRole
  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;