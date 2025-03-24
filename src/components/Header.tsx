import { useForecastContext } from "@/hooks/contexts/useForecastContext"
import { Icon } from "@iconify-icon/react"

export default function Header() {
	const forecast = useForecastContext().weatherForecast

	return (
		<header className="flex justify-between items-center p-4">
			<Icon icon="hugeicons:menu-09" className="text-white text-lg" />
			{forecast === undefined && <span className="text-white">Pesquise uma cidade</span>}
			<Icon icon="cuida:calendar-outline" className="text-white text-lg" />
		</header>
	)
}
