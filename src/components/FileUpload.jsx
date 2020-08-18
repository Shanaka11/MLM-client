import React, {useState} from 'react'

const FileUpload = ({setFinalValue, name, required}) => {

    const [value, setValue] = useState("")

    const handleOnChange = (event) =>{
        // console.log(event.target.files[0])
        if(event.target.files){
            setValue(event.target.files[0])
            setFinalValue(event)
        }
    }

    // const handleOnBlur = (event) => {
    //     setFinalValue(event)
    // }

    // const handleOnKeyPress = (event) => {
    //     if(event.keyCode === 13){
    //         setFinalValue(event)
    //     }
    // }
    
    return (
        <input  type="file"
                name={name}
                onChange={handleOnChange}
                // onKeyDown={handleOnKeyPress}
                // onBlur={handleOnBlur}
                required={required ? "required" : ""}/>
    )
}

export default FileUpload
