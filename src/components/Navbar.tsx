"use client"
import { Icon } from "@iconify-icon/react"

export default function Navbar() {
	return (
		<div className="flex justify-center">
			<div className="bg-[#1d1e30] w-11/12 h-14 center gap-10 rounded-[14px]">
				<Icon icon="fluent:home-24-filled" className="text-white text-lg" />
				<Icon icon="mynaui:search" className="text-white text-lg" />
				<Icon icon="solar:bell-outline" className="text-white text-lg" />
				<Icon icon="proicons:map" className="text-white text-lg" />
			</div>
		</div>
	)
}
