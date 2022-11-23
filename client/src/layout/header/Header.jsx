import React from 'react'
import { useTranslation } from 'react-i18next'
<<<<<<< HEAD
=======
import {LangMenu} from '../../components'
>>>>>>> 646f988 (client)
import styles from './Header.module.scss'
const Header = () => {
	const isAuth = false

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
<<<<<<< HEAD
							<div className={styles.btnOut}>Выйти</div>
						) : (
							<div className={styles.btnWrap}>
								<button className={styles.btnEnter} onClick={() => i18n.changeLanguage('en')}>
									{t('header.toggleLang')}
								</button>
								<button className={styles.btnEnter}>{t('header.signIn')}</button>
								<button className={styles.btnCreate}>{t('header.signUp')}</button>
=======
							<div className={styles.btnOut}>{t('header.logOut')}</div>
						) : (
							<div className={styles.btnWrap}>
								<button className={styles.btnEnter}>{t('header.signIn')}</button>
								<button className={styles.btnCreate}>{t('header.signUp')}</button>
								<LangMenu parentStyles={styles}/>
>>>>>>> 646f988 (client)
							</div>
						)}
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
