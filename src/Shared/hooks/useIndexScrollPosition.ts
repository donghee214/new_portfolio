import React, { useState, useEffect } from 'react'

type Ref = HTMLUListElement

export default (ref: Ref) => {
	if (!ref) {
		return
	}
	const [yPosition, setYPosition] = useState(ref.scrollTop)
	const changeYPosition = (newValY) => {
		setYPosition(newValY)
	}

	useEffect(() => {
		let last_known_scroll_position = 0;
		let ticking = false;
		const response = (e) => {
			last_known_scroll_position = ref.scrollTop;
			if (!ticking) {
				window.requestAnimationFrame(function () {
					changeYPosition(last_known_scroll_position)
					ticking = false;
				});
				ticking = true;
			}
		}
		ref.addEventListener('scroll', response)
		return () => {
			ref.removeEventListener('scroll', response)
		}
	})
	return yPosition
}