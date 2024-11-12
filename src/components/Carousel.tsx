import { Icon } from "@iconify-icon/react"
import type { ThreeHourResponse } from "openweathermap-ts/dist/types"

export default function Carousel({ forecast }: { forecast: ThreeHourResponse | undefined }) {
	const weathers = forecast?.list

	return (
		<div className="flex flex-col">
			<div className="flex items-center gap-2 pl-2 pb-2">
				<Icon icon="tabler:clock" className="text-white text-lg" />
				<h1 className="text-white">Hourly Forecast</h1>
			</div>
			<div className="flex items-center gap-2 px-2 mb-4 overflow-x-auto">
				{weathers === undefined ? (
					<p className="text-white">Loading...</p>
				) : (
					weathers.map(w => (
						<div key={w.dt} className="bg-[#1d1e30] flex flex-col items-center p-2 rounded-xl">
							<div>
								<img
									width={48}
									src={`https://openweathermap.org/img/wn/${w.weather[0].icon}@2x.png`}
									alt="Forecast icon"
								/>
							</div>
							<div>
								<p className="text-center text-white">{w.dt_txt.split(" ")[1].slice(0, 5)}</p>
								<p className="text-center text-white">{w.main.temp.toFixed(0)}°</p>
							</div>
						</div>
					))
				)}
			</div>
		</div>
	)
}
