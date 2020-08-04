import React, {useState} from 'react'

const BtnCard = ({children, onClickHandler, name}) => {

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
        <div className= {hover ? "btn-card-expand" : "btn-card"}  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleOnClick}>            
            {children[0]}
            {   hover &&                     
                    <>
                        {children[1]}
                        {children[2]}
                    </>
            }
        </div>
    )
}

export default BtnCard
