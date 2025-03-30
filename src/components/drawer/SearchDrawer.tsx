import { useWeatherForecast } from "@/hooks/useWeatherForecast"
import { useDeferredValue, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Icon } from "@iconify-icon/react"
import { useForecastContext } from "@/hooks/contexts/useForecastContext"

export default function SearchDrawer({
	isOpen,
	setDrawer,
}: {
	isOpen: boolean
	setDrawer: (clickedDrawer: string, isOpen: boolean) => void
}) {
	const { setWeatherForecast } = useForecastContext()
	const [inputValue, setValue] = useState({ value: "", valid: false })
	const deferredInput = useDeferredValue(inputValue)
	// console.log(`input: ${inputValue.value}\ndeferred: ${deferredInput.value}`)

	const { data, isFetching, isError, refetch } = useWeatherForecast(deferredInput)

	function handleClick() {
		if (inputValue.valid) {
			refetch()
			return
		}
		setValue(prev => ({ ...prev, valid: true }))
	}

	useEffect(() => {
		if (data) {
			setWeatherForecast(data)
		}
	}, [setWeatherForecast, data])

	return (
		<div className={`${isOpen ? "open" : "closed"}Drawer bg-[#1d1e30]`}>
			<Icon
				icon="carbon:close-outline"
				className="text-white"
				onClick={() => setDrawer("search", false)}
			/>

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
