const Manager = require("../lib/Manager");


test("create manager object", () => {
  const manager = new Manager("Jim", "007", "emailaddress@email.com", "999");

  expect(manager.name).toBe("Jim");
  expect(manager.id).toBe("007");
  expect(manager.email).toBe("emailaddress@email.com");
  expect(manager.officeNumber).toBe("999");
});

test("get manager office number", () => {
  const manager = new Manager("Jim", "007", "emailaddress@email.com", "999");

  expect(manager.getOfficeNumber()).toEqual(expect.stringContaining(manager.officeNumber))
});

test("get manager role", () => {
  const manager = new Manager("Jim", "007", "emailaddress@email.com", "999");

  expect(manager.getRole()).toBe("Manager");
});