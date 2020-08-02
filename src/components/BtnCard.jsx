import React, {useState} from 'react'

const BtnCard = ({children, onClickHandler, name}) => {

    const [hover, setHover] = useState(false)

    const handleHover = () => {
        setHover(!hover)
    }

    const handleOnClick = () => {
        onClickHandler(name)
    }

    return (
        <div className= {hover ? "btn-card-expand" : "btn-card"}  onMouseEnter={handleHover} onMouseLeave={handleHover} onClick={handleOnClick}>            
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
