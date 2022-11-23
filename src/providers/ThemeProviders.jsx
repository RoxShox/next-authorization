import { createContext, useMemo, useState } from 'react'

export const ThemeContext = createContext({
	type: 'Light',
})
export const ThemeProvider = ({ children }) => {
	const [type, setType] = useState('Light')
	const value = useMemo(
		() => ({
			type,
			setType,
		}),
		[type],
	)
	return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
