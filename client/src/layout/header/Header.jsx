import React from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { LangMenu } from '../../components'
import { selectIsAuth } from '../../redux/slices/auth'
import styles from './Header.module.scss'
const Header = () => {
	const isAuth = useSelector(selectIsAuth)
	console.log(isAuth)

	const { t, i18n } = useTranslation()

	return (
		<header>
			<div className={styles.header}>
				<div className="container">
					<div className={styles.wrapper}>
						<a className={styles.logo} href="">
							RoxShox & S1ma
						</a>
						{isAuth ? (
							<div className={styles.btnOut}>{t('header.logOut')}</div>
						) : (
							<div className={styles.btnWrap}>
								<button className={styles.btnEnter}>{t('header.signIn')}</button>
								<button className={styles.btnCreate}>{t('header.signUp')}</button>
								<LangMenu />
							</div>
						)}
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
