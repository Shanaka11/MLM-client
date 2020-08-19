import React, { useState } from 'react'

const ImageSlider = ({imageList}) => {
    const [state, setState] = useState({
        slide: 0
    })

    const handleOnNext = () => {
        let tempSlide

        if(state.slide === imageList.length - 1){
            tempSlide = 0
        }else{
            tempSlide = state.slide + 1
        }

        setState(prevValue => {
            return {
                ...prevValue,
                slide: tempSlide
            }
        })
    }

    const handleOnPrev = () => {
        let tempSlide

        if(state.slide - 1 < 0){
            tempSlide = imageList.length - 1
        }else{
            tempSlide = state.slide -1
        }

        setState(prevValue => {
            return {
                ...prevValue,
                slide: tempSlide
            }
        })        
    }

    return (
        <>
        <div className = "page-center-add">
            {imageList.length > 0 && 
                <img className="login-ads" src={imageList[state.slide].doc} alt="Adverts"/>
            }
            <div className="login-ads-btn btn-prev" onClick={handleOnPrev}><span></span></div>
            <div className="login-ads-btn btn-next" onClick={handleOnNext}><span></span></div>
        </div>
        </>
    )
}

// const Slide = () => {
//     return (
//         <div>

//         </div>
//     )
// }

export default ImageSlider
