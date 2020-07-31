import React from 'react'

const SalesPersonBasicData = () => {
    return (
        <div className="container">
            <h1>Salesperson Details</h1>            
            {/* Search */}
            <div className="list-search">
                <input className="list-search-input" type="text"/>
                <button>Search</button>
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
