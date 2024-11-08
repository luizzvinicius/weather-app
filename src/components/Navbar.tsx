"use client"
import { Icon } from "@iconify-icon/react"

export default function Navbar({ toggleDrawer }: { toggleDrawer: any }) {
	return (
		<div className="flex justify-center z-10">
			<div className="bg-[#1d1e30] w-11/12 h-14 flex justify-evenly items-center rounded-2xl">
				<Icon
					icon="fluent:home-24-filled"
					onClick={toggleDrawer}
					className="text-white text-lg cursor-pointer"
				/>
				<Icon
					icon="mynaui:search"
					onClick={toggleDrawer}
					className="text-white text-lg cursor-pointer"
				/>
				<Icon icon="solar:bell-outline" className="text-white text-lg cursor-pointer" />
				<Icon icon="proicons:map" className="text-white text-lg cursor-pointer" />
			</div>
		</div>
	)
}
