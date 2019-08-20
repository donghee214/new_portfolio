import React, { useState, useEffect } from 'react'
import ListItem from 'Menu/Shared/components/ListItem'
import entries from 'Shared/Resources/experienceEntries.json'
import useIndexScrollPosition from 'Menu/Shared/hooks/useIndexScrollPosition'

interface ListItemContainerProps {
    location: any,
    history: any
}

type Ref = HTMLUListElement

const ListItemContainer = React.forwardRef<Ref, ListItemContainerProps>((props, ref) => {
    const [activeIndex, setActiveIndex] = useState(props.location.pathname)

    useEffect(() => {
        const { pathname } = props.location
        setActiveIndex(pathname.slice(1))
    }, [props.location])

    return (
        <ul className="scrollContainer" ref={ref}>
            {entries.experiences.map((props, index) =>
                <ListItem
                    active={index == activeIndex}
                    key={props.id} 
                    {...props} />)}
        </ul>
    )
})

export default ListItemContainer