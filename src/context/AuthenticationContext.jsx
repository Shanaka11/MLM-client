import React, { createContext, useReducer } from "react"
import AuthenticationReducer from "./AuthenticationReducer"
import {ApiAuthenticate, ApiGetUser, ApiRegisterUser, ApiRegisterAdmin, ApiUpdateUser} from "../lookups"

// Initial State
const initialState = {
    logged: localStorage.getItem('token') ? true : false,
    // If logged then fetch it if not already there
    username: "",
    role: "",
    email: "",
    salesperson_id: "",
}

// Create Context
export const AuthenticationContext = createContext(initialState)

// Provider Component
export const AuthenticationProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthenticationReducer, initialState)

    // Actions
    const register = (callback, data) => {
        ApiRegisterUser(callback, data)
    }

    const registerAdmin = (callback, data) =>{
        ApiRegisterAdmin(callback, data)
    }
    const logIn = (credentials) => {

        const handleFrontend = (response, status) => {
            if(status === 200){
                // Handle token storage here
                // Store it inLocalstorage
                localStorage.setItem('token', response.access)
                dispatch({
                    type: 'LOGIN',
                    payload: response
                })
                currentUser()
            }else{
                console.log(response)
                alert(JSON.stringify(response))
            }
        }

        ApiAuthenticate( 
            handleFrontend, 
            {
                username: credentials.username,
                password: credentials.password
            }
        )
    }

    const logOut = () => {
        localStorage.removeItem('token')
        dispatch({
            type: 'LOGOUT'
        })
    }

    const currentUser = () => {

        const handleFrontend = (response, status) => {
            if(status === 200){
                dispatch({
                    type: 'USER',
                    payload: response
                })
            }else{
                console.log(response)
                alert(JSON.stringify(response))
                // Logout
                logOut()
            }
        }

        ApiGetUser(handleFrontend)

    }

    const updateUser = (data) => {

        const handleFrontend = (response, state) => {
            
        }

        ApiUpdateUser(handleFrontend, data)
    }
    return (
        <AuthenticationContext.Provider
            value = {
                {
                    logged: state.logged,
                    username: state.username,
                    role: state.role,
                    salesperson_id: state.salesperson_id,
                    email: state.email,
                    logIn,
                    logOut,
                    currentUser,
                    register,
                    registerAdmin,
                    updateUser
                }
            }
        >
            {children}
        </AuthenticationContext.Provider>
    )
}