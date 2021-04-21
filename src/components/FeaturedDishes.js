import React, { Component } from 'react'
import { DishContext } from '../context'
import { Loading, Dish } from "../components"
import Title from "./Title"

// eslint-disable-next-line
export default class extends Component {
  static contextType = DishContext
  render() {
    let { loading, featuredDishes: dishes } = this.context

    dishes = dishes.map(dish => {
      return <Dish key={dish.id} dish={dish} />
    })

    return (
      <section className="featured-dishes">
        <Title title="featured dishes sets" />
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '-60px'}}>
          <p style={{fontSize: '1.5em', fontFamily: 'Lato',fontStyle: 'italic', maxWidth: '94%' ,textAlign: 'center'}}>Each of our artcraft-dish-sets includes several different dishes allowing you to choose a complete meal, we built the menu in such a way that the meal will include a number of wonderful flavors that have many health ingredients, if you want to choose different dishes talk to one of the waiters next to you and build a meal to your satisfaction.</p>
        </div> 
        <br />         
        <div className="featured-dishes-center">
          {loading ? <Loading /> : dishes}
        </div>
      </section>
    )
  }
}