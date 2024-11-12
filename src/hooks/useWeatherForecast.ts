import { useQuery } from "@tanstack/react-query"

const getWeatherByCity = async (cityName: string) => {
	const request = await fetch(
		`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&lang=pt_br&appid=${process.env.NEXT_PUBLIC_API_KEY}`,
	)
	const data = await request.json()
	return data
}

export function useWeatherForecast(obj: any) {
	const query = useQuery({
		queryFn: () => getWeatherByCity(obj.value),
		queryKey: ["getWeather"],
		enabled: obj.valid,
		refetchOnWindowFocus: false,
	})
	return query
}
