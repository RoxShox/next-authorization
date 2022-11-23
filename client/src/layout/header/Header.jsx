import React from 'react'
import {useTranslation} from 'react-i18next'
import styles from './Header.module.scss'
const Header = () => {
	const { t, i18n } = useTranslation()
	
	return (
		<header>
			<div className={styles.header}>
				<div className="container">
					<div className={styles.wrapper}>
						<a className={styles.logo} href="">
							RoxShox & S1ma
						</a>
						<div className={styles.btnWrap}>
							<button className={styles.btnEnter} onClick={() => i18n.changeLanguage('en')}>{t("header.toggleLang")}</button>
							<button className={styles.btnEnter}>{t("header.signIn")}</button>
							<button className={styles.btnCreate}>{t("header.signUp")}</button>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
