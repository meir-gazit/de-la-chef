import React from 'react'
import Row from '../components/Row.js'
import data from '../assets/data/services.js'
import '../assets/css/fa.css'

const anotherRow = data.splice(3)

export default (props) => {
	const { services, index } = props
	return(<>
		<div className='title'>
	        <h1>Our Services - The thing we love to do.</h1>
	    </div>
		<div className="container mb5" id="container" key='0'>

 			{
 					<Row services={data} index='1' key='5000' />
 			}
 			{
 					<Row services={anotherRow} index='100' key='6000' />
 			}
		</div>
	</>)
}