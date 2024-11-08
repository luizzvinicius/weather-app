export default function Widget() {
	return (
		<div className="flex flex-col items-center">
			<div>
				<span className="text-white">cidade</span>
				<span className="text-white">, pais</span>
			</div>
			<div>
				<img src="https://openweathermap.org/img/wn/10d@2x.png" alt="Forecast icon" />
			</div>
			<div>
				<p className="text-white text-center">29 C</p>
				<p className="text-white text-center">deatalhes.</p>
			</div>
			<div className="flex justify-around w-[100%]">
				<span className="text-white">wind</span>
				<span className="text-white">umidade</span>
				<span className="text-white">time</span>
			</div>
		</div>
	)
}
