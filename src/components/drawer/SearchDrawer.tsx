"use client"
import { useWeatherForecast } from "@/hooks/useWeatherForecast"
import { type Dispatch, useDeferredValue, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Icon } from "@iconify-icon/react"
import type { ThreeHourResponse } from "openweathermap-ts/dist/types"

export default function SearchDrawer({
	toggleDrawer,
	isOpen,
	setWeatherForecast,
}: {
	toggleDrawer: () => void
	isOpen: boolean
	setWeatherForecast: Dispatch<ThreeHourResponse | undefined>
}) {
	const [inputValue, setValue] = useState({ value: "", valid: false })
	const deferredInput = useDeferredValue(inputValue)
	console.log(`input: ${inputValue.value}\ndeferred: ${deferredInput.value}`)

	const { data, isFetching, isError, refetch } = useWeatherForecast(deferredInput)

	function handleClick() {
		if (inputValue.valid) {
			refetch()
			return
		}
		setValue(prev => ({ ...prev, valid: true }))
	}

	useEffect(() => {
		setWeatherForecast(data)
	})

	return (
		<div className={`${isOpen ? "open" : "closed"}Drawer bg-[#1d1e30]`}>
			<button type="button" onClick={toggleDrawer}>
				<Icon icon="carbon:close-outline" />
			</button>
			<h1>Consulte sua cidade</h1>
			<div className="flex justify-center items-center gap-x-2">
				<Input
					className="w-60 h-[90%] text-black focus-visible:ring-[#1d1e30]"
					placeholder="Digite a cidade para pesquisa"
					value={inputValue.value}
					onChange={e => setValue(prev => ({ ...prev, value: e.target.value }))}
				/>
				<Button type="button" onClick={handleClick} className="bg-black" disabled={isFetching}>
					{isFetching ? (
						"..."
					) : (
						<Icon icon="mynaui:search" className="text-white text-lg cursor-pointer" />
					)}
				</Button>
			</div>
			{isError && <h1>Error while Fetching</h1>}
		</div>
	)
}
