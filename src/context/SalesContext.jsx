import React, { createContext, useReducer } from "react"
import SalesReducer from "./SalesReducer"
import {ApiCreateSales, ApiGetSales, ApiRemoveSales, ApiUpdateSales} from "../lookups"

const initialState = {
    salesList: []
}

export const SalesContext = createContext(initialState)

export const SalesProvider = ({ children }) => {
    const [state, dispatch] = useReducer(SalesReducer, initialState)

    // Action
    // Get
    const getSales = () => {

        const handleFrontend = (response, status) => {
            if(status === 200){
                dispatch({
                    type: "GET",
                    payload: response
                })
            }else{
                console.log(response)
            }
        }

        ApiGetSales(handleFrontend)
    }
    // Add
    const addSales = (data) => {
        
        const handleFrontend = (response, status) => {
            if(status === 201){
                dispatch(
                    {
                        type: "ADD",
                        payload: response
                    }
                )
            }else{
                console.log(response)
            }
        }

        ApiCreateSales(handleFrontend, data)
    }    
    // Update
    const updateSales = (data) => {
        
        const handleFrontend = (response, status) => {
            if(status === 200){
                dispatch(
                    {
                        type: "MOD",
                        payload: response
                    }
                )
            }else{
                console.log(response)
            }
        }

        ApiUpdateSales(handleFrontend, data)
    }    
    // Remove
    const removeSales = (data) => {
        
        const handleFrontend = (response, status) => {
            if(status === 204){
                dispatch({
                    type: "DEL",
                    payload: data.id
                })
            }else{
                console.log(response)
            }
        }
        console.log(data)
        ApiRemoveSales(handleFrontend, data.id)
    }    

    return (
        <SalesContext.Provider
            value = {
                {
                    salesList: state.salesList,
                    getSales,
                    addSales,
                    updateSales,
                    removeSales
                }
            }
        >
            {children}
        </SalesContext.Provider>
    )
}