import Image from "next/image"
import { useForecastContext } from "../hooks/contexts/useForecastContext"
import { Icon } from "@iconify-icon/react"

export default function Carousel() {
	const weathers = useForecastContext().weatherForecast?.list
	const mock = Array.from({ length: 14 }, (_, i) => i)

	return (
		<div className="flex flex-col">
			<div className="flex items-center gap-2 pl-2 pb-2">
				<Icon icon="tabler:clock" className="text-white text-lg" />
				<h1 className="text-white">Hourly Forecast</h1>
			</div>
			<div className="h-32 flex items-center gap-2 px-2 mb-4 carousel-scroll overflow-x-auto">
				{weathers === undefined
					? mock.map(i => <div key={i} className={"h-32 w-16 skeleton rounded-xl "} />)
					: weathers.map(w => (
							<div key={w.dt} className="bg-[#1d1e30] flex flex-col items-center p-2 rounded-xl">
								<div>
									<Image
										src={`https://openweathermap.org/img/wn/${w.weather[0].icon}@2x.png`}
										width={48}
										height={48}
										alt="Forecast icon"
									/>
								</div>
								<div>
									<p className="text-center text-white">{w.dt_txt.split(" ")[1].slice(0, 5)}</p>
									<p className="text-center text-white">{w.main.temp.toFixed(0)}°</p>
								</div>
							</div>
						))}
			</div>
		</div>
	)
}
