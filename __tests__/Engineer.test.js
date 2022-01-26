const Engineer = require("../lib/Engineer");

test("create Engineer object", () => {
  const engineer = new Engineer("Jim", "007", "emailaddress@email.com", "githubster");

  expect(engineer.name).toBe("Jim");
  expect(engineer.id).toBe("007");
  expect(engineer.email).toBe("emailaddress@email.com");
  expect(engineer.github).toEqual(expect.stringContaining(engineer.github));
});

test("get github username", () => {
  const engineer = new Engineer("Jim", "007", "emailaddress@email.com", "githubster");

  expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github));
});

test("get role 'Engineer'", () => {
  const engineer = new Engineer("Jim", "007", "emailaddress@email.com", "githubster");

  expect(engineer.getRole()).toBe("Engineer");
})