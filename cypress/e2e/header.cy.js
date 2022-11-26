/// <reference types="Cypress" />

describe('Header component test', () => {
	it('[nav bar] test', () => {
		cy
			.visit('/')
			.get('header a')
			.first()
			.should(a => {
				return expect(a).to.have.text("RoxShox & S1ma")
			})
			.click()
			.url()
			.should('include', '/')
			.get('header')
			.find('a[href="/auth/login"]')
			.click()
			.url()
			.should('include', '/auth/login')
			.get('header')
			.find('a[href="/auth/register"]')
			.click()
			.url()
			.should('include', '/auth/register')		
	})
	it('[language switcher] test', () => {
		cy
			.visit('/')
			.get('header button')
			.first()
			.click()
			.parent()
			.find('ul button:first')
			.next('button')
			.should(btn => {
				return expect(btn).to.have.text("en")
			})
			.click()
			.should(btn => {
				expect(btn).to.have.attr('disabled')
			})
			.next('button')	
			.should(btn => {
				return expect(btn).to.have.text("de") 
			})
			.click()
			.should('have.attr', 'disabled')
	})
	it('[theme switcher] test', () => {
		cy
			.visit('/')
			.get('.wrapperTheme')
			.should('not.have.class', 'dark')
			.wait(500)
			.get('header button:last')
			.click()
			.get('.wrapperTheme.dark')
			.should('have.class', 'dark')
			.wait(500)
			.get('header button:last')
			.click()
			.get('.wrapperTheme')
			.should('not.have.class', 'dark')
		
	})
})