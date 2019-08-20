import React, { useState, useEffect } from 'react'
import ListIndex from 'Menu/Shared/components/ListIndex'
import entries from 'Shared/Resources/experienceEntries.json'
import useWindowHeight from 'Menu/Shared/hooks/useWindowHeight'

//TODO: MAKE THIS LISTEN TO WITHROUTER INSTEAD, need a workaround for React.forwardRef ts
interface ListIndexContainerProps {
    location: any,
    history: any
}

type Ref = HTMLUListElement

const ListIndexContainer = React.forwardRef<Ref, ListIndexContainerProps>((props, ref) => {
    const [activeIndex, setActiveIndex] = useState(props.location.pathname)
    const windowHeight = useWindowHeight(window.innerHeight)

    useEffect(() => {
        const { pathname } = props.location
        setActiveIndex(pathname.slice(1))
    }, [props.location])
    
    return (
        <ul className="listScrollContainer" ref={ref}>
            <li className="listItemBuffer">

            </li>
            {entries.experiences.map(
                (entryProps, index) => <ListIndex
                    key={entryProps.id}
                    order={index}
                    active={index == activeIndex}
                    history={props.history}
                    {...entryProps} />)
            }
            <li className="listItemBuffer">

            </li>
        </ul>
    )
})

export default ListIndexContainer