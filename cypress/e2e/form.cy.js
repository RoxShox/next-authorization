/// <reference types="Cypress" />

describe("Auth pages test", () => {
	const botEmail = "bot@world.earth",
		botPass = "botpassword",
		botName = "Bot Cypressovich";
	const input = {
		email: 'input[name="email"]',
		name: 'input[name="name"]',
		pass: 'input[name="pass"]',
		confPass: 'input[name="confPass"]',
		submit: 'input[type="submit"]',
	};

	it("Visit register page", () => {
		cy.visit("/auth/register")
			.get("#auth")
			.find(input.name)
			.type(botName)
			.should("have.value", botName)
			.next(input.email)
			.type(botEmail)
			.should("have.value", botEmail)
			.next()
			.find(input.pass)
			.type(botPass)
			.parent()
			.next()
			.find(input.confPass)
			.type(botPass)
			.parent()
			.next()
			.find(input.submit)
			.click()
			.next("a")
			.should("have.attr", "href", "/auth/login")
			.log("Register page have no problems");
	});

	it("Visit login page", () => {
		cy.visit("/auth/login")
			.get("#auth")
			.find(input.email)
			.type(botEmail)
			.should("have.value", botEmail)
			.next()
			.find(input.pass)
			.type(botPass)
			.parent()
			.next(input.submit)
			.next("a")
			.should("have.attr", "href", "/auth/register")
			.log("Login page have no problems");
	});

	/*
    Заметки разработчика: 

    .get(любой элемент)
    .find(дочерний элемент)

    .focus(фокус на элемент)
  */
});
