import { Icon } from "@iconify-icon/react"

export default function Carousel() {
	return (
		<div className="flex flex-col">
			<div className="flex items-center gap-2">
				<Icon icon="tabler:clock" className="text-white text-lg" />
				<h1 className="text-white">Hourly Forecast</h1>
			</div>

			<div className="flex items-center debug h-10">
				{Array.from({ length: 10 }).map((_, i) => (
					<div key={i} className="text-white">
						{i}
					</div>
				))}
			</div>
		</div>
	)
}
