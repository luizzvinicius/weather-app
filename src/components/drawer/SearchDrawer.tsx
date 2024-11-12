"use client"
import { useWeatherForecast } from "@/hooks/useWeatherForecast"
import { useDeferredValue, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Icon } from "@iconify-icon/react"

export default function SearchDrawer({
	toggleDrawer,
	isOpen,
	setWeatherForeCast,
}: { toggleDrawer: () => void; isOpen: boolean; setWeatherForeCast: any }) {
	const [inputValue, setValue] = useState({ value: "", valid: false })
	const deferredInput = useDeferredValue(inputValue)
	// se não tem erro, nem está pendente, foi

	function handleClick() {
		setValue(prev => ({ ...prev, valid: true }))
	}
	const { data, isPending, isError } = useWeatherForecast(deferredInput)

	useEffect(() => {
		if (!isPending && !isError) {
			setWeatherForeCast(data)
		}
	})

	return (
		<div className={`${isOpen ? "open" : "closed"}Drawer bg-[#1d1e30] `}>
			<button type="button" onClick={toggleDrawer}>
				X
			</button>
			<h1>Consulte sua cidade</h1>
			<div className="flex justify-center items-center gap-x-2">
				<Input
					className="w-60 h-[90%] text-black focus-visible:ring-[#1d1e30]"
					placeholder="Digite a cidade para pesquisa"
					value={inputValue.value}
					onChange={e => setValue(prev => ({ ...prev, value: e.target.value }))}
				/>
				<Button type="button" onClick={handleClick} className="bg-black">
					<Icon icon="mynaui:search" className="text-white text-lg cursor-pointer" />
				</Button>
			</div>
			{isError ? <h1>Error while Fetching</h1> : <></>}
		</div>
	)
}
