import React, { createContext, useReducer } from "react"
import AuthenticationReducer from "./AuthenticationReducer"
import {ApiAuthenticate, ApiGetUser} from "../lookups"

// Initial State
const initialState = {
    logged: localStorage.getItem('token') ? true : false,
    // If logged then fetch it if not already there
    username: "",
    role: "",
}

// Create Context
export const AuthenticationContext = createContext(initialState)

// Provider Component
export const AuthenticationProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthenticationReducer, initialState)

    // Actions
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
            }else{
                console.log(response)
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
                // Logout
                // logOut()
            }
        }

        ApiGetUser(handleFrontend)

    }

    return (
        <AuthenticationContext.Provider
            value = {
                {
                    logged: state.logged,
                    username: state.username,
                    role: state.role,
                    logIn,
                    logOut,
                    currentUser
                }
            }
        >
            {children}
        </AuthenticationContext.Provider>
    )
}