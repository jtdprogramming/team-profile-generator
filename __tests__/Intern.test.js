const Intern = require("../lib/Intern");

test("create Intern object", () => {
  const intern = new Intern("Jim", "007", "emailaddress@email.com", "UNCC");

  expect(intern.name).toBe("Jim");
  expect(intern.id).toBe("007");
  expect(intern.email).toBe("emailaddress@email.com");
  expect(intern.school).toEqual(expect.stringContaining(intern.school));
});

test("get school info", () => {
  const intern = new Intern("Jim", "007", "emailaddress@email.com", "UNCC");

  expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school));
});

test("get role Intern", () => {
  const intern = new Intern("Jim", "007", "emailaddress@email.com", "UNCC");

  expect(intern.getRole()).toBe("Intern");
});