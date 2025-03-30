"use client"
import Carousel from "@/components/Carousel"
import Navbar from "@/components/Navbar"
import Widget from "@/components/Widget"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { useState } from "react"
import type { ThreeHourResponse } from "openweathermap-ts/dist/types"
import { ForecastContext } from "../hooks/contexts/useForecastContext"
import Header from "@/components/Header"

const queryClient = new QueryClient()

export default function Home() {
	const [weatherForecast, setWeatherForecast] = useState<ThreeHourResponse | undefined>()

	return (
		<QueryClientProvider client={queryClient}>
			<ForecastContext.Provider value={{ weatherForecast, setWeatherForecast }}>
				<div className="bg-black min-h-screen flex flex-col pb-5">
					<Header />
					<Widget />
					<Carousel />
					<div className="flex justify-center mt-auto">
						<Navbar />
					</div>
				</div>
			</ForecastContext.Provider>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	)
}
