import React, { Component } from 'react'
import '../assets/css/Card.css'
import Card from './ImageCard'
import DB from '../assets/data/db'

export default class extends Component {

  constructor(props){
    super(props)
    this.state = {
      properties: DB.properties,
      property: DB.properties[0]
    }
  }

  nextProperty = () => {
    const newIndex = this.state.property.index+1
    this.setState({
      property: DB.properties[newIndex]
    })
  }

  prevProperty = () => {
    const newIndex = this.state.property.index-1
    this.setState({
      property: DB.properties[newIndex]
    })
  }

  render() {
    const {properties, property} = this.state
    return (
      <div className="App">

        <button 
          onClick={() => this.nextProperty()} 
          disabled={property.index === properties.length-1}
        >Next</button>
        <button 
          onClick={() => this.prevProperty()} 
          disabled={property.index === 0}
        >Prev</button>

        <div className="page">

            <div className="col">
              <div className={`cards-slider active-slide-${property.index}`}>
                <div className="cards-slider-wrapper" style={{
                  'transform': `translateX(-${property.index*(100/properties.length)}%)`
                }}>
                  {
                    properties.map(property => 
                      <Card key={property._id} property={property} />)
                  }
                </div>
              </div>
            </div>

        </div>
      </div>
    )
  }
}