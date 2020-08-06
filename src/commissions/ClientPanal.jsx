import React from 'react'

const ClientPanal = () => {
    const name = "Fetch the name from the context"
    return (
        <div className="container">
            <h1>Client Interface - {name} </h1>
            <div className="list">
                <div className="list-item">
                    <div className="row">
                        <div className="col-3">
                            <div>Sponser Name</div>
                            <div>Shanaka</div>
                            <div>Personal Commission</div>
                            <div>100</div>
                        </div>
                        <div className="col-3">
                            <div>Qualification</div>
                            <div>2000</div>
                            <div>Group Commission</div>
                            <div>100</div>
                        </div>
                        <div className="col-3">
                            <div>Total Individual Sales</div>
                            <div>20000</div>
                        </div>
                        <div className="col-3">
                            <div>Total Group Sales</div>
                            <div>141200</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col">
                    <div className="list">
                        <div className="list-item">
                            have a breadcrumb trail of salesperson here
                        </div>
                        <div className="list-item">
                            <div className="row">
                                <div className="col-3">
                                    <h5>Id</h5>
                                </div>
                                <div className="col-3">
                                    <h5>Name</h5>
                                </div>
                                <div className="col-3">
                                    <h5>Qualification</h5>
                                </div>
                                <div className="col-3">
                                    <h5>Commission</h5>
                                </div>
                            </div>                            
                        </div>
                        <div className="list-item">
                            <div className="row">
                                <div className="col-3">
                                    <p>1</p>
                                </div>
                                <div className="col-3">
                                    <p>Miguel</p>
                                </div>
                                <div className="col-3">
                                    <p>5%</p>
                                </div>
                                <div className="col-3">
                                    <p>100</p>
                                </div>
                            </div>
                        </div>
                    </div>                    
                </div>
            </div>
        </div>
    )
}

export default ClientPanal