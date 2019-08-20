import React, { useState, useEffect } from 'react'

export default (indexContainerHeight:number) => {
    const [ratio, setRatio] = useState(indexContainerHeight/window.innerHeight)
    const calculateRatio = () => {        
        setRatio(indexContainerHeight/window.innerHeight)
    }
    
	useEffect(() => {
        window.addEventListener('resize',calculateRatio)
		return () => {
			window.removeEventListener('resize', calculateRatio)
		}
	})
	return ratio
}