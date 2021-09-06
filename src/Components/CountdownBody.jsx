import React from 'react'

const CountdownBody = ({ days, hours, minutes, seconds }) => {
	return (
		<div className='main'>
			<div className='main__elem'>
				<div className='main__days' id='days'>
					{days}
				</div>
				<span className='main__text'>Days</span>
			</div>
			<div className='main__elem'>
				<div className='main__hours' id='hours'>
					{hours}
				</div>
				<span className='main__text'>Hours</span>
			</div>
			<div className='main__elem'>
				<div className='main__minutes' id='minutes'>
					{minutes}
				</div>
				<span className='main__text'>Minutes</span>
			</div>
			<div className='main__elem'>
				<div className='main__seconds' id='seconds'>
					{seconds}
				</div>
				<span className='main__text'>Seconds</span>
			</div>
		</div>
	)
}

export default CountdownBody
