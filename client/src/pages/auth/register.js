import React from 'react'
import AuthForm from '../../components/AuthForm/AuthForm'

const register = () => {
	return (
		<div style={{ display: 'flex', justifyContent: 'center' }}>
			<AuthForm type='register'/>
		</div>
	)
}

export default register
