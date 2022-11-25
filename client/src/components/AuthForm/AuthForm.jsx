import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAuth, fetchRegister } from '../../redux'
import styles from './AuthForm.module.scss'
import axios from 'axios'
import { selectIsAuth } from '../../redux/slices/auth'
import { useRouter } from 'next/router'
const AuthForm = ({ type }) => {
	const initState = {
		name: '',
		email: '',
		pass: '',
		confPass: '',
		checkConfPass: true,
		checkSubmit: false,
	}
	const [state, setState] = useState(initState)
	const [emailDirty, setEmailDirty] = useState(false)
	const [nameDirty, setNameDirty] = useState(false)
	const [passwordDirty, setPasswordDirty] = useState(false)
	const [emailError, setEmailError] = useState('Eмейл не может быть пустым')
	const [passwordError, setPasswordError] = useState('Пароль не может быть пустым')
	const [nameError, setNameError] = useState('Имя не может быть пустым')
	const checkSubmitDepends =
		type === 'login' ? [state.pass, state.email] : [state.checkConfPass, state.email, state.name]
	const dispatch = useDispatch()
	const { t, i18n } = useTranslation()
	const isAuth = useSelector(selectIsAuth)

	const router = useRouter()

	useEffect(() => {
		if (type === 'login') return
		if (state.email.length === 0 && state.pass.length === 0) return
		checkConfPass()
	}, [state.pass, state.confPass])

	useEffect(() => {
		checkSubmit()
	}, checkSubmitDepends)

	function checkConfPass() {
		const newState = { ...state }
		newState.checkConfPass = state.pass === state.confPass && state.pass.length >= 5
		if (!newState.checkConfPass) newState.checkSubmit = false
		setState(newState)
	}

	function checkSubmit() {
		const newState = { ...state }
		if (type === 'login') {
			newState.checkSubmit = false
			if (!state.email || !state.pass) return setState(newState)
			newState.checkSubmit = true
			return setState(newState)
		}
		if (!state.email || !(state.checkConfPass && state.pass) || !state.name) {
			newState.checkSubmit = false
			return setState(newState)
		}
		newState.checkSubmit = true
		setState(newState)
	}

	function handleChange(e) {
		const newState = { ...state }
		const target = e.target
		const re =
			/^[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/
		newState[target.name] = target.value
		if (!re.test(String(newState['email']).toLowerCase())) {
			setEmailError('Некорректно введённый эмайл')
		} else {
			setEmailError('')
		}
		if (newState['pass'].length < 5) {
			setPasswordError('Пароль должен быть больше 5 симоволов')
		} else {
			setPasswordError('')
		}
		if (newState['name'].length < 2) {
			setNameError('Имя должно быть больше 2-х символов')
		} else {
			setNameError('')
		}
		return setState(newState)
	}
	function blurHandler(e) {
		switch (e.target.name) {
			case 'email':
				setEmailDirty(true)
				break
			case 'pass':
				setPasswordDirty(true)
				break
			case 'name':
				setNameDirty(true)
				break
		}
	}
	console.log(emailError)
	async function formSubmit(e) {
		e.preventDefault()
		if (!state.checkSubmit && type !== 'login') return
		if (type === 'login') {
			const req = {
				password: state.pass,
				email: state.email,
			}
			const res = await dispatch(fetchAuth(req))
			console.log(res.payload)
			if (!res.payload) {
				return alert('Не удалось авторизоваться')
			}
			if ('token' in res.payload) {
				window.localStorage.setItem('token', res.payload.token)
			}
		}
		if (type === 'register') {
			const req = {
				password: state.pass,
				email: state.email,
				fullName: state.name,
			}
			const res = await dispatch(fetchRegister(req))
			console.log(res.payload)
			if (!res.payload) {
				return alert('Не удалось авторизоваться')
			}
			if ('token' in res.payload) {
				window.localStorage.setItem('token', res.payload.token)
			}
		}
	}
	if (isAuth) {
		router.push('/user')
	}
	return (
		<div className={styles.formContainer}>
			<form id="auth" className={styles.form} onSubmit={formSubmit}>
				{type === 'login' ? (
					<>
						<h1 className={styles.form__title}>{t('form.login')}</h1>
						<input
							onBlur={blurHandler}
							required
							type="email"
							placeholder={t('form.inputs.email')}
							name="email"
							className={styles.form__input}
							onChange={handleChange}
						/>
						{emailDirty && emailError && <div style={{ color: 'red' }}>{emailError}</div>}
						<div className={styles.passContainer}>
							<input
								onBlur={blurHandler}
								required
								type="password"
								placeholder={t('form.inputs.pass')}
								name="pass"
								className={styles.form__input}
								onChange={handleChange}
							/>
							{passwordDirty && passwordError && (
								<div style={{ color: 'red' }}>{passwordError}</div>
							)}
							<span className={styles.form__helps} onClick={() => alert('Aхахах, сожалеем :(')}>
								{t('form.inputs.forgotPass')}
							</span>
						</div>
						<div className={styles.btnContainer}>
							<input
								type="submit"
								value={t('form.inputs.submit')}
								className={`${styles.form__input} ${styles.form__input_submit} ${
									state.checkSubmit ? styles.active : ''
								}`}
							/>
						</div>
						<Link href="/register" className={`${styles.form__helps} ${styles.form__helps_link}`}>
							{t('form.inputs.dontHaveAccount')}
						</Link>
					</>
				) : (
					<>
						<h1 className={styles.form__title}>{t('form.register')}</h1>
						<input
							onBlur={blurHandler}
							required
							type="text"
							placeholder={t('form.inputs.name')}
							name="name"
							className={styles.form__input}
							onChange={handleChange}
						/>
						{nameDirty && nameError && <div style={{ color: 'red' }}>{nameError}</div>}
						<input
							onBlur={blurHandler}
							required
							type="email"
							placeholder={t('form.inputs.email')}
							name="email"
							className={styles.form__input}
							onChange={handleChange}
						/>
						{emailDirty && emailError && <div style={{ color: 'red' }}>{emailError}</div>}
						<div className={styles.passContainer}>
							<input
								onBlur={blurHandler}
								minLength="5"
								required
								type="password"
								placeholder={t('form.inputs.pass')}
								name="pass"
								className={styles.form__input}
								onChange={handleChange}
							/>
							{passwordDirty && passwordError && (
								<div style={{ color: 'red' }}>{passwordError}</div>
							)}
							<span
								className={`${styles.form__helps} ${styles.form__helps_pass} ${
									state.pass ? '' : styles.active
								}`}>
								{t('form.inputs.passHelper')}
							</span>
						</div>
						<div className={`${styles.passContainer} ${!state.checkConfPass ? styles.danger : ''}`}>
							<input
								required
								type="password"
								disabled={state.pass.length < 5 ? true : false}
								placeholder={t('form.inputs.confPass')}
								name="confPass"
								className={styles.form__input}
								onChange={handleChange}
							/>
							<span className={`${styles.form__helps} ${styles.form__helps_confPass}`}>
								{t('form.inputs.confPassHelper')}
							</span>
						</div>

						<div className={styles.btnContainer}>
							<input
								type="submit"
								value={t('form.inputs.submit')}
								className={`${styles.form__input} ${styles.form__input_submit} ${
									state.checkSubmit ? styles.active : ''
								} `}
							/>
							<Link href="/login" className={styles.form__helps}>
								{t('form.inputs.haveAccount')}
							</Link>
						</div>
					</>
				)}
			</form>
		</div>
	)
}

export default AuthForm
