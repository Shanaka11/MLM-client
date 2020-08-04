import React, { useState } from 'react'

const EditSales = ({children, show, handleClose, name, id, onDelete}) => {
    const [step, setStep] = useState(1)

    const showHideClassName = show ? "modal display-block" : "modal display-none";

    const modalOk = (event) => {
        event.preventDefault()
        setStep(1)
        handleClose(name)
    }

    const handleEdit = (event) => {
        setStep(2)
    }

    const handleDelete = (event) => {
        setStep(3)
        onDelete()
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
                        <h1>Sale Details - {id} </h1>
                        {step === 1 ?
                            <> 
                            {children}
                            </>
                            :
                            <>
                                {step === 2 ?                            
                                <>
                                <p>New Sales Item has being edited successfully</p>
                                </>
                                :
                                <>
                                <p>Sales Item has being Removed successfully</p>
                                </>
                                }
                            </>
                        }
                    </div>
                    {/* modal-footer */}
                    <div className="d-flex">                        
                        {step === 1 ? 
                            <>
                                <button className="modal-btn modal-btn-3" onClick={modalOk}>Close</button>
                                <button type="submit" className="modal-btn modal-btn-3" onClick={handleEdit}>Save Changes</button>
                                <button className="modal-btn modal-btn-3" onClick={handleDelete}>Delete</button>
                            </>
                            :
                            <>
                                <button className="modal-btn" onClick={modalOk}>Close</button>
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

export default EditSales
