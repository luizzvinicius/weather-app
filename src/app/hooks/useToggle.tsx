import { useState } from "react"

export default function useToggle() {
	const [value, setValue] = useState<boolean>(true)

	const toggleDrawer = () => {
		setValue(!value)
	}

	return {
		value,
		toggleDrawer,
	}
}
