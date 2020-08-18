import React, {useState} from 'react'

const UploadAgreement = ({children, show, handleClose, name, onSubmit, onReset}) => {
    // const [step, setStep] = useState(1)

    const showHideClassName = show ? "modal display-block" : "modal display-none";

    const modalOk = (event) => {
        event.preventDefault()
        // setStep(1)
        handleClose(name)
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        onSubmit()
        // setStep(2)
    }

    // const handleReset = (event) => {
    //     event.preventDefault()
    //     onReset()
    //     setStep(1)
    // }

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                {/* modal-body */}
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className="modal-body">
                    {/* modal-header */}
                        <h1>Upload Agreement</h1>
                        {children}
                    </div>
                    {/* modal-footer */}
                    <div className="d-flex">
                        <button className="modal-btn" onClick={modalOk}>Close</button>
                        <button type="submit" className="modal-btn">Done</button>                        
                    </div>
                    <div className="d-flex">
                        <div className="modal-step modal-step-active"></div>
                        <div className="modal-step modal-step-active"></div>
                    </div>
                </form>
            </section>            
        </div>
    )
}

export default UploadAgreement
