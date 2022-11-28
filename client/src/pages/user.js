import React from 'react'
import Head from 'next/head'
import { useSelector } from 'react-redux'
import {useTranslation} from 'react-i18next'
const User = () => {
	const data = useSelector(state => state.auth.data)
	
	const { t } = useTranslation()
	console.log(data)

	if (!data) {
		return <h1 style={{ textAlign: 'center' }}>{t('userPage.loading')}</h1>
	}

	return (
			<div className="user__text">
				<Head>
				<title>{data.fullName}</title>
				</Head>
				<h1>{t('userPage.text')}{data.fullName}</h1>
			</div>
	)
}

export default User
