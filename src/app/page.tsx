import Carousel from "@/components/Carousel"
import Navbar from "@/components/Navbar"
import { HiMenuAlt4 } from "react-icons/hi"
import { PiCalendarDots } from "react-icons/pi"

export default function Home() {
	return (
		<div className="bg-black h-screen">
			<header className="flex justify-between items-center px-4">
				<HiMenuAlt4 className="text-white size-6" />
				<PiCalendarDots className="text-white size-6" />
			</header>
			<Carousel />
			<Navbar />
		</div>
	)
}
