import React, {useState} from 'react'

const Input = ({type, setFinalValue, placeholder, initialValue, reset, required}) => { 

    const [value, setValue] = useState(reset === "TRUE" ? "" : (initialValue ? initialValue : ""))

    const handleOnChange = (event) =>{
        setValue(event.target.value)
    }

    const handleOnBlur = (event) => {
        setFinalValue(event.target.value)
    }

    const handleOnKeyPress = (event) => {
        if(event.keyCode === 13){
            setFinalValue(value)
        }
    }

    return (
        <div>
            <input  className="input-control" 
                    type={type} 
                    placeholder=" "
                    onChange={handleOnChange}
                    onKeyDown={handleOnKeyPress}
                    value={value}
                    onBlur={handleOnBlur}
                    step="any"
                    required={required ? "required" : ""}/>
            <label className="input-label" >{placeholder}</label>            
        </div>
    )
}

export default Input
