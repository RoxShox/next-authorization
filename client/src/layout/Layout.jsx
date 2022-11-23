import React from 'react'
<<<<<<< HEAD
import WrapperTheme from '../components/WrapperTheme'
import i18n from '../helpers/i18next'
import { ThemeProvider } from '../providers/ThemeProviders'
=======
import i18n from '../helpers/i18next'
>>>>>>> 646f988 (client)
import Footer from './footer/Footer'
import Header from './header/Header'

const Layout = ({ children }) => {
	return (
<<<<<<< HEAD
		<ThemeProvider>
			<WrapperTheme>
				<Header />
				<div className="container">{children}</div>
				<Footer />
			</WrapperTheme>
		</ThemeProvider>
=======
		<div>
			<Header />
				<div className="container">{children}</div>
			<Footer />
		</div>
>>>>>>> 646f988 (client)
	)
}

export default Layout
