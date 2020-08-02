import React, { useState } from 'react'

const AddSales = ({children, show, handleClose, name}) => {

    const [step, setStep] = useState(1)

    const showHideClassName = show ? "modal display-block" : "modal display-none";

    const handleOnClick = () => {    
        setStep(1)    
        handleClose(name)
    }

    const nextStep = (event) => {
        event.preventDefault()
        // Create the Sale object here and send it to backend
        setStep(2)
    }

    const modalOk = () => {
        setStep(1)
    }

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                {/* modal-body */}
                <form>
                    <div className="modal-body">
                    {/* modal-header */}
                        <h1>Add Sales</h1>
                        {step === 1 ?
                            <> 
                            {children}
                            </>
                            :
                            <>
                            <p>New Sales Item has being creted successfully</p>
                            </>
                        }
                    </div>
                    {/* modal-footer */}
                    <div className="d-flex">
                        <button className="modal-btn" onClick={handleOnClick}>Close</button>
                        {step === 1 ? 
                            <>
                                <button type="submit" className="modal-btn" onClick={nextStep}>Done</button>
                            </>
                            :
                            <>
                                <button className="modal-btn" onClick={modalOk}>View Sales List</button>                        
                            </>
                            }
                        
                    </div>
                    <div className="d-flex">
                        {step === 1 ?
                            <>
                                <div className="modal-step modal-step-active"></div>
                                <div className="modal-step"></div>
                            </>
                            :
                            <>
                                <div className="modal-step"></div>
                                <div className="modal-step modal-step-active"></div>
                            </>                        
                        }
                    </div>
                </form>
            </section>            
        </div>
    )
}

export default AddSales
