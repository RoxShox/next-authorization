import React from 'react'
import styles from './Header.module.scss'
const Header = () => {
	const isAuth = true

	return (
		<header>
			<div className={styles.header}>
				<div className="container">
					<div className={styles.wrapper}>
						<a className={styles.logo} href="">
							RoxShox & S1ma
						</a>
						{isAuth ? (
							<div className={styles.btnWrap}>
								<button className={styles.btnOut}>Выйти</button>
							</div>
						) : (
							<div className={styles.btnWrap}>
								<button className={styles.btnEnter}>Войти</button>
								<button className={styles.btnCreate}>Создать аккаунт</button>
							</div>
						)}
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
