import React from "react"
import loadingImg from '../assets/images/loading.svg'

// eslint-disable-next-line
export default () => 
	<div className="loading">
		<h4>dishes data loading....</h4>
		<img src={loadingImg} alt="" />
	</div>