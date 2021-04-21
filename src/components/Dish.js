import React from 'react'
import { Link } from 'react-router-dom'
import defaultImg from '../assets/images/defaultImg.jpeg'
import PropTypes from 'prop-types'
import Tippy from '@tippy.js/react'
import '../assets/css/tippy.css'

export default function Dish({dish}) {
	const {
		name,
		preatyUrl,
		images,
		price
	} = dish

	return (
		<article className='dish'>
		  <div className='img-container'>
		  <img src={images[0] || defaultImg} alt='Only the best' />		
		    <div className='price-top'>
		      <h6>${price}</h6>
		      <p>For a satisfying dish</p>
		    </div>
		    <Tippy content={name}>
		    <Link to={`/dishes/${preatyUrl}`} className='btn-primary dish-link' style={{fontFamily: 'Crushed'}}>features</Link>
		    </Tippy>
		  </div>
		  <p className='dish-info'>{name}</p>
		</article>		
	)
}

Dish.propTypes = {
  dish: PropTypes.shape({
    name: PropTypes.string.isRequired,
    preatyUrl: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired
  })
}