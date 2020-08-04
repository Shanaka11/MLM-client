import React, {useContext, useState} from 'react'
import {AuthenticationContext} from "../context"

const Navbar = () => {

    const {username, logOut} = useContext(AuthenticationContext)
    const [classname, setClassname] = useState("nav-dropdown display-none")

    const handleUserOnClick = () => {
        if(classname === "nav-dropdown display-block") {
            setClassname("nav-dropdown display-none")
        }else {
            setClassname("nav-dropdown display-block")
        }        
    }

    return (
        <nav className="nav">
            <div className="container d-flex ">
                <div className="nav-user ml-auto" onClick={handleUserOnClick}>
                    {username}
                    <div className={classname}>
                        <div className="nav-dropdown-item" onClick={logOut}>
                            Logout
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar