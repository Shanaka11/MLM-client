import React, {useState} from 'react'

const Checkbox = ({label, name, initialValue, handleChecked, required}) => {

    const [state, setState] = useState(initialValue ? initialValue : false)

    const handleChange = (event) => {
        setState(!state)
        handleChecked(event)
    }
    return (
        <label className="check-box-container">{label}
            <input  name={name} 
                    type="checkbox" 
                    onChange={handleChange} 
                    checked={state} 
                    required={required ? "required" : ""}/> 
            <span className="checkmark"></span>
        </label>
    )
}

export default Checkbox
