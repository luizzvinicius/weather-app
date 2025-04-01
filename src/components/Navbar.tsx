import { Icon } from "@iconify-icon/react"
import SearchDrawer from "./drawer/SearchDrawer"
import useToggle from "@/hooks/useToggle"

export default function Navbar() {
	const { value, toggleDrawer } = useToggle()

	return (
		<div className="w-11/12 flex flex-col justify-center items-center ">
			<SearchDrawer isOpen={value.isOpen} setDrawer={toggleDrawer} />

			<div className="w-full h-14 bg-[#1d1e30] flex justify-evenly items-center rounded-2xl ">
				<Icon
					icon="fluent:home-24-filled"
					onClick={() => toggleDrawer("home", false)}
					tabIndex={0}
					className="h-1/2 w-10 flex justify-center items-center text-white text-lg cursor-pointer focus:border-b focus:border-b-[hsl(237, 25%, 20%)]"
				/>
				<Icon
					icon="mynaui:search"
					onClick={() => toggleDrawer("search", !value.isOpen)}
					tabIndex={0}
					className="h-1/2 w-10 flex justify-center items-center text-white text-lg cursor-pointer focus:border-b focus:border-b-[hsl(237, 25%, 20%)]"
				/>
				<Icon
					icon="solar:bell-outline"
					onClick={() => toggleDrawer("notification", false)}
					tabIndex={0}
					className="h-1/2 w-10 flex justify-center items-center text-white text-lg cursor-pointer focus:border-b focus:border-b-[hsl(237, 25%, 20%)]"
				/>
				<Icon
					icon="proicons:map"
					onClick={() => toggleDrawer("map", false)}
					tabIndex={0}
					className="h-1/2 w-10 flex justify-center items-center text-white text-lg cursor-pointer focus:border-b focus:border-b-[hsl(237, 25%, 20%)]"
				/>
			</div>
		</div>
	)
}
