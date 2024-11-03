"use client"
import { GoHomeFill, GoSearch } from "react-icons/go"
import { LuBell } from "react-icons/lu"
import { CiMap } from "react-icons/ci"

export default function Navbar() {
	return (
		<div className="flex justify-center">
			<div className="bg-[#1d1e30] w-11/12 h-14 center gap-10 rounded-[14px]">
				<GoHomeFill className="text-white size-8" />
				<GoSearch className="text-white size-8" />
				<LuBell className="text-white size-8" />
				<CiMap className="text-white size-8" />
			</div>
		</div>
	)
}
