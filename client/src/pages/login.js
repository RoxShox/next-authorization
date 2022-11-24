import React from 'react'
import AuthForm from '../components/AuthForm/AuthForm'

const login = () => {
	return (
		<div style={{ display: 'flex', justifyContent: 'center' }}>
			<AuthForm type="login" />
		</div>
	)
}

export default login
