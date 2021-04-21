import React from 'react'
import Dish from './Dish'

// eslint-disable-next-line
export default ({ dishes }) => {
	if(dishes.lenght === 0){
		return (
			<div className="empty-search">
				<h3>unforunately there are no dishes matched your search parameters</h3>
			</div>
		)
	}
	return (
		<section className="dishesList">
			<div className="dishes-center">
				{
					dishes.map(dish => {
						return <Dish key={dish.id} dish={dish} />
					})
				}
			</div>
		</section>
	)
}
