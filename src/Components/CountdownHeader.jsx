import React from 'react'

const CountdownHeader = props => {
	return (
		<div className='header'>
			<div className='header__text'>Days to New Year</div>
			<span className='header__date'>{props.today.date.toDateString()} - today</span>
		</div>
	)
}

export default CountdownHeader
