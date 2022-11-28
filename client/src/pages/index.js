import Head from 'next/head'
import { useTranslation } from 'react-i18next'
export default function(){
	const {t, i18n} = useTranslation()
	return (
		<div>
			<Head>
				<title>Enigma</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className='container' style={{display: 'flex', flexDirection: 'column'}}>
				<h1 style={{ textAlign: 'center', marginTop: 50 }}>{t('mainPage.defaultText')}</h1>
				<span className="jest">{t('mainPage.jest')}</span>
				{i18n.language === 'de' ? <img src="/plane.png" alt="plane" style={{ height: 400} }/> : null}
			</div>
		</div>
	)
}
