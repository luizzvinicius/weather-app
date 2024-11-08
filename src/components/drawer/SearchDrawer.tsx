import { useDeferredValue, useState } from "react"

const getWeatherByCity = async (cityName: string) => {
	const request = await fetch(
		`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${process.env.NEXT_PUBLIC_API_KEY}`,
	)
	const data = await request.json()
	console.log(data)
}

export default function SearchDrawer({
	toggleDrawer,
	isOpen,
}: { toggleDrawer: any; isOpen: boolean }) {
	const [inputValue, setValue] = useState<string>("")
	const deferredInput = useDeferredValue(inputValue)
	console.log(deferredInput)

	return (
		<div className={`${isOpen ? "open" : "closed"}Drawer debug bg-[#1d1e30] flex`}>
			<div className="flex debug w-[100%] justify-center">
				<button type="button" onClick={toggleDrawer} className="debug">
					X
				</button>
				<input
					placeholder="Digite a cidade para pesquisa"
					className="h-6 w-64 text-black"
					value={inputValue}
					onChange={e => setValue(e.target.value)}
				/>
			</div>
			<button type="button" onClick={() => getWeatherByCity(deferredInput)} className="debug">
				search
			</button>
		</div>
	)
}
