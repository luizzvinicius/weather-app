import { useState } from "react"

export default function useToggle() {
	const [value, setValue] = useState({
		clickedDrawer: "",
		isOpen: false,
	})

	function toggleDrawer(clickedDrawer: string, isOpen: boolean) {
		setValue({ clickedDrawer, isOpen })
	}

	return {
		value,
		toggleDrawer,
	}
}
