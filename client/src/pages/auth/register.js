import Head from 'next/head'
import React from 'react'
import { useTranslation } from 'react-i18next'

import AuthForm from '../../components/AuthForm/AuthForm'

const register = () => {
	const {t} = useTranslation()
	return (
		<div style={{ display: 'flex', justifyContent: 'center' }}>
			<Head><title>{t('form.register')}</title></Head>
			<AuthForm type='register' />
		</div>
	)
}

export default register
