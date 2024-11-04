import Carousel from "@/components/Carousel"
import Navbar from "@/components/Navbar"
import { Icon } from "@iconify-icon/react"

export default function Home() {
	return (
		<div className="bg-black h-screen">
			<header className="flex justify-between items-center px-4">
				<Icon icon="hugeicons:menu-09" className="text-white text-lg" />
				<Icon icon="cuida:calendar-outline" className="text-white text-lg" />
			</header>
			<Carousel />
			<Navbar />
		</div>
	)
}
