import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter as Rotuer } from "react-router-dom"
import {DishProvider} from './context'

ReactDOM.render(
	<DishProvider>
		<Rotuer>
			<App />
		</Rotuer>
	</DishProvider>,
  document.getElementById("root")
)