import { createContext, useContext } from "react"
import type { ThreeHourResponse } from "openweathermap-ts/dist/types"

type ForecastContextType = {
	weatherForecast: ThreeHourResponse | undefined
	setWeatherForecast: (forecast: ThreeHourResponse) => void
}

export const ForecastContext = createContext<ForecastContextType>({
	weatherForecast: undefined,
	setWeatherForecast: () => {},
})

export function useForecastContext() {
	const forecast = useContext(ForecastContext)

	// if (forecast === undefined) {
	// 	throw new Error("There is no forecast yet. Check context or request")
	// }

	return forecast
}
