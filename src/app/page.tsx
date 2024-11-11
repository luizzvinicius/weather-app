"use client"
import Carousel from "@/components/Carousel"
import Navbar from "@/components/Navbar"
import SearchDrawer from "@/components/drawer/SearchDrawer"
import { Icon } from "@iconify-icon/react"
import useToggle from "./hooks/useToggle"
import Widget from "@/components/Widget"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

const queryClient = new QueryClient()

export default function Home() {
	const { value, toggleDrawer } = useToggle()

	return (
		<QueryClientProvider client={queryClient}>
			<div className="bg-black h-screen flex justify-between flex-col pb-5">
				<header className="flex justify-between items-center p-4">
					<Icon icon="hugeicons:menu-09" className="text-white text-lg" />
					<Icon icon="cuida:calendar-outline" className="text-white text-lg" />
				</header>
				<div className="">
					<Widget />
				</div>
				<div className="">
					<Carousel />
					<SearchDrawer toggleDrawer={toggleDrawer} isOpen={value} />
					<Navbar toggleDrawer={toggleDrawer} />
				</div>
			</div>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	)
}
