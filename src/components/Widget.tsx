import type { ThreeHourResponse } from "openweathermap-ts/dist/types"
import { Icon } from "@iconify-icon/react"

export default function Widget({ forecast }: { forecast: ThreeHourResponse | undefined }) {
	const currentWeather = forecast?.list[0]
	const iconUrl = `https://openweathermap.org/img/wn/${currentWeather?.weather[0].icon}@2x.png`

	return (
		<div className="flex flex-col items-center">
			<div>
				<span className="text-white">{forecast?.city.name}</span>
				<span className="text-white">, {forecast?.city.country}</span>
			</div>
			<div>
				<img src={iconUrl} alt="Forecast icon" />
			</div>
			<div>
				<p className="text-white text-center">{currentWeather?.main.temp.toFixed(0)} °C</p>
				<p className="text-white text-center">{currentWeather?.weather.at(-1)?.description}</p>
			</div>
			<div className="flex justify-evenly w-[100%]">
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
