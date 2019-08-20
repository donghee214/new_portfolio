import React, { useState, useEffect } from 'react'
import 'Menu/Shared/Menu.css'
import ListIndexContainer from 'Menu/ListIndexContainer'
import ListItemContainer from 'Menu/ListItemContainer'
import useWindowRatio from 'Menu/Shared/hooks/useWindowRatio'
import useWindowHeight from 'Menu/Shared/hooks/useWindowHeight'
import debounce from 'Shared/Utils/debounce'
import { withRouter, RouteComponentProps } from 'react-router';

const Menu: React.FC<RouteComponentProps> = ({ history, location, match }) => {
	const [listItemRef] = useState(React.createRef<HTMLUListElement>())
	const [listIndexRef] = useState(React.createRef<HTMLUListElement>())
	const listIndexHeight = 128
	const scrollRatio = useWindowRatio(listIndexHeight)
	const windowHeight = useWindowHeight(window.innerHeight)
	const response = (e) => {
		last_known_scroll_position = e.target.scrollTop		
		if (!ticking) {
			window.requestAnimationFrame(() => {
				debouncedUpdatePath()
				ticking = false
				listIndexRef.current.style.transform = `translate3d(0,-${last_known_scroll_position * scrollRatio}px, 0)`
			});
			ticking = true;
		}
	}
	const updatePath = () => {
		const index = Math.floor(last_known_scroll_position / window.innerHeight).toString()
		history.push(index)
	}

	const debouncedUpdatePath = debounce(updatePath, 250)
	let last_known_scroll_position = 0
	let ticking = false

	useEffect(() => {
		listItemRef.current.addEventListener('scroll', response, {
			passive: true
		})
		return () => {
			listItemRef.current.removeEventListener('scroll', response)
		}
	}, [listItemRef, scrollRatio])

	useEffect(() => {
		const { pathname } = location
		listItemRef.current.scrollTop = parseInt(pathname.slice(1)) * windowHeight
	}, [])

	useEffect(() => {		
		let { pathname } = location		
		if (pathname.includes('-!') === true){				
			const index = parseInt(pathname.slice(1).replace('-!', ''))
			let scrollToVal = index * windowHeight
			listItemRef.current.scrollTo({
				top: scrollToVal,
				behavior: 'smooth'
			})
		}
	}, [location])

	return (
		<div className="menuContainer">
			<ListIndexContainer
				ref={listIndexRef}
				location={location}
				history={history}
			/>
			<ListItemContainer
				ref={listItemRef}
				location={location}
				history={history}
				match={match}
			/>
		</div>
	)
}

export default withRouter(Menu)