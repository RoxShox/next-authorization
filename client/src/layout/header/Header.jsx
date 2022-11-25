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
import { useRouter } from 'next/router'
import { BsSunFill, BsFillMoonStarsFill } from 'react-icons/bs'
const Header = () => {
	const isAuth = useSelector(selectIsAuth)
	const dispatch = useDispatch()
	const router = useRouter()
	const { t, i18n } = useTranslation()
	const onClickLogout = () => {
		if (window.confirm('Вы действительно хотите выйти?')) {
			dispatch(logout())
			window.localStorage.removeItem('token')
			router.push('/')
		}
	}
	const { isDark, setIsDark } = useTheme()
	return (
		<header>
			<div className={styles.header}>
				<div className="container">
					<div className={styles.wrapper}>
						<a data="logo" className={styles.logo} href="">
							RoxShox & S1ma
						</a>
						{isAuth ? (
							<div>
								<div onClick={onClickLogout} className={styles.btnOut}>
									{t('header.logOut')}
								</div>
								<LangMenu />
							</div>
						) : (
							<div className={styles.btnWrap}>
								<Link href="/auth/login" className={styles.btnEnter}>
									{t('header.signIn')}
								</Link>
								<Link href="/auth/register" className={styles.btnCreate}>
									{t('header.signUp')}
								</Link>
								<LangMenu />
								<button
									style={{ border: 'none', background: 'none', cursor: 'pointer' }}
									onClick={() => setIsDark(!isDark)}>
									{isDark ? (
										<BsSunFill color={'rgb(185 255 73)'} size={30} />
									) : (
										<BsFillMoonStarsFill color={'#4b5d9f'} size={30} />
									)}
								</button>
							</div>
						)}
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
