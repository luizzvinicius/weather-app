import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import type { ThreeHourResponse } from "openweathermap-ts/dist/types"

const getWeatherByCity = async (cityName: string) => {
	const request = await axios.get<ThreeHourResponse>(
		`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&lang=pt_br&appid=${process.env.NEXT_PUBLIC_API_KEY}`,
	)
	return request.data
}

type UseWeatherForecastParam = {
	value: string
	valid: boolean
}

export function useWeatherForecast(param: UseWeatherForecastParam) {
	const query = useQuery({
		queryFn: () => getWeatherByCity(param.value),
		queryKey: ["getWeather"],
		enabled: param.valid,
		refetchOnWindowFocus: false,
	})
	return query
}
