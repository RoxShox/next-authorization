import React from 'react'
import useTheme from '../hooks/useTheme'

const WrapperTheme = ({ children }) => {
	const { isDark } = useTheme()

	return <div className={`wrapperTheme ${isDark ? 'dark' : ''}`}>{children}</div>
}

export default WrapperTheme
