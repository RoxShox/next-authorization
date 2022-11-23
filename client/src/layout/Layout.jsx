import React from 'react'
import i18n from '../helpers/i18next'
import Footer from './footer/Footer'
import Header from './header/Header'

const Layout = ({ children }) => {
	return (
		<div>
			<Header />
				<div className="container">{children}</div>
			<Footer />
		</div>
	)
}

export default Layout
