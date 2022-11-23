import React from 'react'
import useTheme from '../hooks/useTheme'

const WrapperTheme = ({ children }) => {
	const { type } = useTheme()

	return <div className={`wrapperTheme ${type === 'Dark' ? 'dark' : ''}`}>{children}</div>
}

export default WrapperTheme
