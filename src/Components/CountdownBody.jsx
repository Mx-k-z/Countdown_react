import React from 'react'

const CountdownBody = ({days, hours, minutes, seconds}) => {
	return (
		<div className="container-countdown">
			<div className="elem">
				<div className="numbers-days" id="days">{days}</div>
				<span className="text">Days</span>
			</div>
			<div className="elem">
				<div className="numbers-hours" id="hours">{hours}</div>
				<span className="text">Hours</span>
			</div>
			<div className="elem">
				<div className="numbers-minutes" id="minutes">{minutes}</div>
				<span className="text">Minutes</span>
			</div>
			<div className="elem">
				<div className="numbers-seconds" id="seconds">{seconds}</div>
				<span className="text">Seconds</span>
			</div>
		</div>
	)
}

export default CountdownBody