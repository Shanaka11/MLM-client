import React from 'react'

const UploadAdd = ({children, show, handleClose, name, onSubmit}) => {

    const showHideClassName = show ? "modal display-block" : "modal display-none";

    const modalOk = (event) => {
        event.preventDefault()
        handleClose(name)
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        onSubmit()
    }

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

export default UploadAdd
