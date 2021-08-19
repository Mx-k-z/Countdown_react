import React from 'react'

const CountdownHeader = (props) => {
	return (
		<div className="header">
			<div className="header-text">Days to Birthday</div>
			<span className="header-date">{props.today.date.toDateString()} - today</span>
		</div>
	)
}

export default CountdownHeader