"use client"
import Carousel from "@/components/Carousel"
import Navbar from "@/components/Navbar"
import SearchDrawer from "@/components/drawer/SearchDrawer"
import { Icon } from "@iconify-icon/react"
import useToggle from "../hooks/useToggle"
import Widget from "@/components/Widget"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { useState } from "react"
import type { ThreeHourResponse } from "openweathermap-ts/dist/types"
import { ForecastContext } from "../hooks/contexts/useForecastContext"

const queryClient = new QueryClient()

export default function Home() {
	const { value, toggleDrawer } = useToggle()
	const [weatherForecast, setWeatherForecast] = useState<ThreeHourResponse | undefined>()

	return (
		<QueryClientProvider client={queryClient}>
			<ForecastContext.Provider value={{ weatherForecast, setWeatherForecast }}>
				<div className="bg-black min-h-screen flex justify-between flex-col pb-5">
					<header className="flex justify-between items-center p-4">
						<Icon icon="hugeicons:menu-09" className="text-white text-lg" />

						{weatherForecast === undefined && (
							<span className="text-white">Pesquise uma cidade</span>
						)}

						<Icon icon="cuida:calendar-outline" className="text-white text-lg" />
					</header>
					<Widget />
					<Carousel />
					<div className="flex flex-col items-center">
						<div className="flex justify-center w-[91.6%]">
							<SearchDrawer toggleDrawer={toggleDrawer} isOpen={value} />
						</div>
						<Navbar toggleDrawer={toggleDrawer} />
					</div>
				</div>
			</ForecastContext.Provider>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	)
}
