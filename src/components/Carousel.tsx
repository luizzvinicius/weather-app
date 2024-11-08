import { Icon } from "@iconify-icon/react"

export default function Carousel() {
	const mock = Array.from({ length: 15 })
	return (
		<div className="flex flex-col">
			<div className="flex items-center gap-2 pl-2 pb-2">
				<Icon icon="tabler:clock" className="text-white text-lg" />
				<h1 className="text-white">Hourly Forecast</h1>
			</div>
			<div className="flex items-center gap-2 px-2 mb-4 overflow-x-auto">
				{mock.map((_, i) => (
					<div key={i} className="bg-[#1d1e30] flex flex-col items-center p-2 rounded-xl">
						<div>
							<img
								width={48}
								src="https://openweathermap.org/img/wn/10d@2x.png"
								alt="Forecast icon"
							/>
						</div>
						<div>
							<p className="text-center text-white">hour</p>
							<p className="text-center text-white">29</p>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
