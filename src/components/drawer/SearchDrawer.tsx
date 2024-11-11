"use client"
import { useWeatherForecast } from "@/app/hooks/useWeatherForecast"
import { useDeferredValue, useState } from "react"

export default function SearchDrawer({
	toggleDrawer,
	isOpen,
}: { toggleDrawer: any; isOpen: boolean }) {
	const [inputValue, setValue] = useState({ value: "", valid: false })
	const deferredInput = useDeferredValue(inputValue)
	// se não tem erro, nem está pendente, foi

	function handleClick() {
		setValue(prev => ({ ...prev, valid: true }))
	}
	const { data, isPending, isError } = useWeatherForecast(deferredInput)
	console.log(data)

	return (
		<div className={`${isOpen ? "open" : "closed"}Drawer debug bg-[#1d1e30] flex`}>
			<div className="flex debug w-[100%] justify-center">
				<button type="button" onClick={toggleDrawer} className="debug">
					X
				</button>
				<input
					placeholder="Digite a cidade para pesquisa"
					className="h-6 w-64 text-black"
					value={inputValue.value}
					onChange={e => setValue(prev => ({ ...prev, value: e.target.value }))}
				/>
			</div>
			{isError ? <h1>Error while Fetching</h1> : <></>}

			<button type="button" onClick={handleClick} className="debug">
				search
			</button>
		</div>
	)
}
