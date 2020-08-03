import React, { createContext, useReducer } from "react"
import AuthenticationReducer from "./AuthenticationReducer"

// Initial State
const initialState = {
    logged: false,
    username: "",
    role: ""
}

// Create Context
export const AuthenticationContext = createContext(initialState)

// Provider Component
export const AuthenticationProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthenticationReducer, initialState)

    // Actions

    return (
        <AuthenticationContext.Provider
            value = {
                {
                    logged: state.logged,
                    username: state.username,
                    role: state.role
                }
            }
        >
            {children}
        </AuthenticationContext.Provider>
    )
}