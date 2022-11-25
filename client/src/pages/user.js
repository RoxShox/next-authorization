import React from 'react'
import { useSelector } from 'react-redux'

const User = () => {
	const data = useSelector(state => state.auth.data)
	console.log(data)

	if (!data) {
		return <h1 style={{ textAlign: 'center' }}>Загрузка страницы пользователя...</h1>
	}

	return (
		<div className="user__text">
			<h1>Имя пользователя:{data.fullName}</h1>
		</div>
	)
}

export default User
