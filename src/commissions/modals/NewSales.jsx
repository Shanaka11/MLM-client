import React, { useState } from 'react'

const AddSales = ({children, show, handleClose, name}) => {

    const [step, setStep] = useState(1)

    const showHideClassName = show ? "modal display-block" : "modal display-none";

    const modalOk = (event) => {
        event.preventDefault()
        setStep(1)
        handleClose(name)
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        setStep(2)
    }

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                {/* modal-body */}
                <form onSubmit={handleSubmit}>
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
                        <button className="modal-btn" onClick={modalOk}>Close</button>
                        {step === 1 ? 
                            <>
                                <button type="submit" className="modal-btn">Done</button>
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
