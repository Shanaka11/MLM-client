import React, {useContext, useState} from 'react'
import {AuthenticationContext} from "../context"
import { useHistory } from 'react-router-dom'
import logo from "../img/logo.png"

const Navbar = () => {

    const {role, username, logOut} = useContext(AuthenticationContext)
    const [classname, setClassname] = useState("nav-dropdown display-none")
    const [dropdown, setDropdown] = useState(false)
    const history = useHistory()

    const handleUserOnClick = () => {
        if(classname === "nav-dropdown display-block") {
            setClassname("nav-dropdown display-none")
        }else {
            setClassname("nav-dropdown display-block")
        }        
    }

    const handleHambergurOnClick = () => {
        setDropdown(!dropdown)
    }

    const handleRedirectHome = () => {
        if(role === "ADMIN"){
            history.push("/admin/")
        }else if(role === "CLIENT"){
            history.push("/client/")
        }
        setDropdown(false)
    }

    const handleAddAdmins = () => {
        history.push("/admin/register/admin")
        setDropdown(false)
    }

    const handleSettings = () => {
        history.push("/user/register/settings")
        setDropdown(false)
    }

    return (
        <nav className="nav">
            <div className="container d-flex-a ">
                {/* Add the logo here */}
                <div className="nav-logo">
                    <img className="logo" src={logo} alt="Logo"/>
                </div>
                {/* Hamburger Menu */}
                <div className="ml-auto hamberger-menu">
                    <div className="nav-item-head" onClick={handleHambergurOnClick}>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                    {dropdown && 
                    <div className="nav-hamberger">
                        <div className="nav-item" onClick={handleRedirectHome}>
                            Home
                        </div>
                        { role === "ADMIN" && 
                            <div className="nav-item" onClick={handleAddAdmins}>
                                Create an Admin
                            </div>
                        }    
                        <div className="nav-item nav-user" onClick={handleUserOnClick}>
                            {username}
                            <div className={classname}>
                                <div className="nav-dropdown-item" onClick={handleSettings}>
                                    Settings
                                </div>
                                <div className="nav-dropdown-item" onClick={logOut}>
                                    Logout
                                </div>
                            </div>
                        </div>                                            
                    </div>
                    }
                </div>
                <div className="nav-nav d-flex-a ml-auto">
                    <div className="nav-item" onClick={handleRedirectHome}>
                        Home
                    </div>
                    { role === "ADMIN" && 
                        <div className="nav-item" onClick={handleAddAdmins}>
                            Create an Admin
                        </div>
                    }
                    <div className="nav-item nav-user" onClick={handleUserOnClick}>
                        {username}
                        <div className={classname}>
                            <div className="nav-dropdown-item" onClick={handleSettings}>
                                Settings
                            </div>
                            <div className="nav-dropdown-item" onClick={logOut}>
                                Logout
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar