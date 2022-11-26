import React from 'react'
import WrapperTheme from '../components/WrapperTheme'
import { ThemeProvider } from '../providers/ThemeProviders'
import i18n from '../helpers/i18next'
import Footer from './footer/Footer'
import Header from './header/Header'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAuthMe, selectIsAuth } from '../redux/slices/auth'

const Layout = ({ children }) => {
	const dispatch = useDispatch()
	const isAuth = useSelector(selectIsAuth)

	React.useEffect(() => {
		dispatch(fetchAuthMe())
	}, [])

	return (
		<ThemeProvider>
			<WrapperTheme>
				<Header />
				<main className="main container">{children}</main>
				<Footer />
			</WrapperTheme>
		</ThemeProvider>
	)
}

export default Layout
