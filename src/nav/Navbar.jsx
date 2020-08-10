import React, {useContext, useState} from 'react'
import {AuthenticationContext} from "../context"
import { useHistory } from 'react-router-dom'

const Navbar = () => {

    const {role, username, logOut} = useContext(AuthenticationContext)
    const [classname, setClassname] = useState("nav-dropdown display-none")
    const history = useHistory()

    const handleUserOnClick = () => {
        if(classname === "nav-dropdown display-block") {
            setClassname("nav-dropdown display-none")
        }else {
            setClassname("nav-dropdown display-block")
        }        
    }

    const handleRedirectHome = () => {
        if(role === "ADMIN"){
            history.push("/admin/")
        }else if(role === "CLIENT"){
            history.push("/client/")
        }
    }

    const handleAddAdmins = () => {
        history.push("/admin/register/admin")
    }

    return (
        <nav className="nav">
            <div className="container d-flex ">
                <div className="nav-item  ml-auto" onClick={handleRedirectHome}>
                    Home
                </div>
                <div className="nav-item" onClick={handleAddAdmins}>
                    Create an Admin
                </div>
                <div className="nav-item nav-user" onClick={handleUserOnClick}>
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