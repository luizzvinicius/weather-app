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
					className="text-white text-lg cursor-pointer"
				/>
				<Icon
					icon="mynaui:search"
					onClick={() => toggleDrawer("search", !value.isOpen)}
					className="text-white text-lg cursor-pointer"
				/>
				<Icon icon="solar:bell-outline" className="text-white text-lg cursor-pointer" />
				<Icon icon="proicons:map" className="text-white text-lg cursor-pointer" />
			</div>
		</div>
	)
}
