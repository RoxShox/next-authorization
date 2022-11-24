import Link from 'next/link'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { LangMenu } from '../../components'
import { selectIsAuth } from '../../redux/slices/auth'
import { logout } from '../../redux/slices/auth'
import { useDispatch } from 'react-redux'
import styles from './Header.module.scss'
import useTheme from '../../hooks/useTheme'
const Header = () => {
	const isAuth = useSelector(selectIsAuth)
	const dispatch = useDispatch()
	console.log(isAuth)

	const { t, i18n } = useTranslation()

	const onClickLogout = () => {
		if (window.confirm('Вы действительно хотите выйти?')) {
			dispatch(logout())
			window.localStorage.removeItem('token')
		}
	}
	const { isDark, setIsDark } = useTheme()
	return (
		<header>
			<div className={styles.header}>
				<div className="container">
					<div className={styles.wrapper}>
						<a className={styles.logo} href="">
							RoxShox & S1ma
						</a>
						{isAuth ? (
							<div onClick={onClickLogout} className={styles.btnOut}>
								{t('header.logOut')}
							</div>
						) : (
							<div className={styles.btnWrap}>
								<Link href="/login" className={styles.btnEnter}>
									{t('header.signIn')}
								</Link>
								<Link href="/register" className={styles.btnCreate}>
									{t('header.signUp')}
								</Link>
								<LangMenu />
								<button onClick={() => setIsDark(!isDark)}>Change Theme</button>
							</div>
						)}
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
