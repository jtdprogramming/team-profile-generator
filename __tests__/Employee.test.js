const Employee = require("../lib/Employee");
// test employee object creation
test("create employee object", () => {
  const employee = new Employee("Jim", "007", "emailaddress@email.com");

  expect(employee.name).toBe("Jim");
  expect(employee.id).toBe("007");
  expect(employee.email).toBe("emailaddress@email.com");
});

// test getName()
test("get employee name", () => {
  const employee = new Employee("Jim", "007", "emailaddress@email.com");

  expect(employee.getName()).toBe(employee.name);
});

// test getId()
test("get employee id", () => {
  const employee = new Employee("Jim", "007", "emailaddress@email.com");

  expect(employee.getId()).toBe(employee.id);
});

// test getEmail()
test("get employee email", () => {
  const employee = new Employee("Jim", "007", "emailaddress@email.com");

  expect(employee.getEmail()).toBe(employee.email);
});

// test getRole() - should return 'Employee'
test("get employee role", () => {
  const employee = new Employee("Jim", "007", "emailaddress@email.com");

  expect(employee.getRole()).toBe("Employee");
});
