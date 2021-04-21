import React, {useEffect} from 'react'
import { Switch, Route } from "react-router-dom"
import './assets/css/style.css'
import { 
  Home, 
  Dish, 
  Dishes, 
  Services, 
  About, 
  Contact, 
  Error 
} from './pages'
import { 
  Navbar,
  Footer,
} from './components'
// eslint-disable-next-line 
const useMouse = () => {
   useEffect(() => {
    function onHandleMouseMove(e){
      let mouseCursor = document.querySelector('#cursor')
      mouseCursor.style.top = e.pageY + 'px'
      mouseCursor.style.left = e.pageX + 'px'
    }
    document.addEventListener('mousemove', onHandleMouseMove)
    return () => document.removeEventListener('mousemove', onHandleMouseMove)
  })
}

// eslint-disable-next-line
export default () => {
  useMouse()
  return (
      <>
        <div id='cursor' className="cursor">
          <div id='pointer' className='pointer'></div>
        </div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dishes/" component={Dishes} />
          <Route exact path="/dishes/:preatyUrl" component={Dish} />
          <Route exact path="/Services/" component={Services} />
          <Route exact path="/About/" component={About} />
          <Route exact path="/contact/" component={Contact} />
          <Route component={Error} />
        </Switch>
        <Footer />
      </>
    )
}