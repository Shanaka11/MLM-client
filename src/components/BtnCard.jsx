import React, {useState} from 'react'

const BtnCard = ({children}) => {
    const [hover, setHover] = useState(false)

    const handleHover = () => {
        setHover(!hover)
    }

    return (
        <div className= {hover ? "btn-card-expand" : "btn-card"}  onMouseEnter={handleHover} onMouseLeave={handleHover}>            
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
