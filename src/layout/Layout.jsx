import React from 'react'
import WrapperTheme from '../components/WrapperTheme'
import i18n from '../helpers/i18next'
import { ThemeProvider } from '../providers/ThemeProviders'
import Footer from './footer/Footer'
import Header from './header/Header'

const Layout = ({ children }) => {
	return (
		<ThemeProvider>
			<WrapperTheme>
				<Header />
				<div className="container">{children}</div>
				<Footer />
			</WrapperTheme>
		</ThemeProvider>
	)
}

export default Layout
