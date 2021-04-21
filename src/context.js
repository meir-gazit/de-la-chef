import React, { Component } from "react"
import Client from "./contentful"
/*
Client.getEntries({ content_type: 'name' })
  .then(response => console.log(response))
  .catch(console.error)
*/
const DishContext = React.createContext()

class DishProvider extends Component {
  state = {
    dishes: [],
    sortedDishes: [],
    featuredDishes: [],
    loading: true,
  }

  getData = async () => {
    try {
      
      let response = await Client.getEntries({ content_type: "name" })
      let dishes = this.formatData(response.items)
      let featuredDishes = dishes.filter(dish => dish.featured === true)
      this.setState({
        dishes,
        featuredDishes,
        sortedDishes: dishes,
        loading: false,
      })

    } catch (error) {
        console.log(error)
    }
  }

  componentDidMount() {
    this.getData()
  }

  formatData(items) {
    let tempItems = items.map(item => {
      let id = item.sys.id
      let images = item.fields.images.map(image => image.fields.file.url)
      let dish = { ...item.fields, images, id }
      return dish
    })
    return tempItems
  }

  getDish = preatyUrl => {
    let tempDishes = [...this.state.dishes];
    const dish = tempDishes.find(dish => dish.preatyUrl === preatyUrl)
    return dish
  }

  render() {
    return (
      <DishContext.Provider value={{
                                    ...this.state,
                                    getDish: this.getDish
                                  }}>
        {this.props.children}
      </DishContext.Provider>
    )
  }
}

const DishConsumer = DishContext.Consumer

export { 
	DishContext, 
	DishProvider, 
	DishConsumer, 
}

export function withDishConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <DishConsumer>
        {
          value => <Component {...props} context={value} />
        }
      </DishConsumer>
    )
  }
}
