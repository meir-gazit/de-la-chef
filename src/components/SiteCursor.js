import React, { useRef } from 'react'
import '../assets/css/style.css'

export default () => {
	const cursorRef = useRef(null);

	useRef(() => {
		document.addEventListener('mousemove', e => {
			const {clientY, clientX } = e
			const mouseX = clientX - cursorRef.current.clientWidth / 2
			const mouseY = clientY - cursorRef.current.clientHight / 2
			cursorRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px, 0)`
		})
	},{})

	return <div className="app-cursor" ref={cursorRef} />
}	