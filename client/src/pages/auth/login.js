import Head from 'next/head'
import React from 'react'
import { useTranslation } from 'react-i18next'
import AuthForm from '../../components/AuthForm/AuthForm'


const login = () => {
	const {t} = useTranslation()
	return (
		<div style={{ display: 'flex', justifyContent: 'center' }}>
			<Head><title>{t('form.login')}</title></Head>
			<AuthForm type='login' />
		</div>
	)
}

export default login
