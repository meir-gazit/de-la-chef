import React from 'react'
import Column from './Column'

export default (props) => {
	const { services, index } = props
	return(
 		<div className='row' id={index} key={index}> 
 			{
 				services.map((service, i) => (
 					<Column service={service} index={i+2} key={i+2} />)
 				)
 			}
 		</div>
	)
}