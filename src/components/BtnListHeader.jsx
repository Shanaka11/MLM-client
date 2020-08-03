import React, { useState } from 'react'

const BtnListHeader = ({children, onClickHandler, name}) => {
    const [hover, setHover] = useState(false)

    const handleHover = () => {
        setHover(!hover)
    }

    const handleOnClick = () => {
        onClickHandler(name)
    }

    return (
        <div className= {hover ? "list-header-btn-expand ml-auto" : "list-header-btn ml-auto"}  onMouseEnter={handleHover} onMouseLeave={handleHover} onClick={handleOnClick}>            
            {children[0]}
            {   hover &&                     
                    <>
                        {children[1]}
                    </>
            }
        </div>
    )
}

export default BtnListHeader
