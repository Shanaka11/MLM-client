import React from 'react'

const SalesPersonBasicData = () => {
    return (
        <div className="container">
            <div className="d-flex">
                <h1>Salesperson Details</h1>
                <button className="btn ml-auto">ADD</button>
            </div>
            {/* Search */}
            <div className="list-search">
                <input className="input-control list-search-input" type="text"/>
                <button className="btn">Search</button>
            </div>
            {/* List */}
            <div className="list">
                <div className="list-item">
                    <div>Id</div>
                    <div>Name</div>
                    <div>Address</div>
                    <div>Cell</div>
                    <div>Sponser</div>
                    <div>Realestate</div>
                </div>
                <div className="list-item">
                    <div>Id</div>
                    <div>Name</div>
                    <div>Address</div>
                    <div>Cell</div>
                    <div>Sponser</div>
                    <div>Realestate</div>
                </div>            
            </div>
        </div>
    )
}

export default SalesPersonBasicData
