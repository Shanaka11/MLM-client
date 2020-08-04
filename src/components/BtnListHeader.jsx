import React, { useState } from 'react'

const BtnListHeader = ({children, onClickHandler, name}) => {
    const [hover, setHover] = useState(false)

    const handleMouseEnter = () => {
        setHover(true)
    }

    const handleMouseLeave = () => {
        setHover(false)
    }

    const handleOnClick = () => {
        onClickHandler(name)
    }

    return (
        <div className= {hover ? "list-header-btn-expand ml-auto" : "list-header-btn ml-auto"}  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleOnClick}>            
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
