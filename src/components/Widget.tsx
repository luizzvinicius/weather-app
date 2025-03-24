import Image from "next/image"
import { useForecastContext } from "../hooks/contexts/useForecastContext"
import { Icon } from "@iconify-icon/react"

export default function Widget() {
	const forecast = useForecastContext().weatherForecast
	const currentWeather = forecast?.list[0]

	return (
		<div className="flex flex-col items-center">
			<div className={`${forecast === undefined && "skeleton skeleton-text"}`}>
				<span className="text-white">
					{forecast?.city.name}, {forecast?.city.country}
				</span>
			</div>
			<div className={`${forecast === undefined && "skeleton skeleton-image my-2"}`}>
				<Image
					src={`https://openweathermap.org/img/wn/${currentWeather?.weather[0].icon}@2x.png`}
					width={120}
					height={120}
					alt="weather icon"
				/>
			</div>
			<div className={`${forecast === undefined && "skeleton skeleton-icon"} mb-2`}>
				<p className="text-white text-center">{currentWeather?.main.temp.toFixed(0)} °C</p>
				<p className="text-white text-center">{currentWeather?.weather.at(-1)?.description}</p>
			</div>
			<div
				className={`${forecast === undefined ? "skeleton skeleton-text" : "flex justify-evenly w-[100%]"}`}
			>
				<span className="text-white flex items-center gap-x-2">
					<Icon icon="lucide:wind" /> {currentWeather?.wind.speed} m/s
				</span>
				<span className="text-white flex items-center gap-x-2">
					<Icon icon="icon-park-outline:water-level" /> {currentWeather?.main.humidity}%
				</span>
				<span className="text-white flex items-center gap-x-2">
					<Icon icon="iconoir:sun-light" /> {currentWeather?.dt_txt.split(" ")[1].slice(0, 5)}h
				</span>
			</div>
		</div>
	)
}
