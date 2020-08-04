import React, { createContext, useReducer } from "react"
import SalesReducer from "./SalesReducer"
import {ApiCreateSales, ApiGetSales, ApiRemoveSales, ApiUpdateSales,
        ApiCreateSalesperson, ApiGetSalesperson, ApiRemoveSalesperson, ApiUpdateSalesperson} from "../lookups"

const initialState = {
    salesList: [],
    salespersonList: []
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

    const getSalesperson = () => {

        const handleFrontend = (response, status) => {
            if(status === 200){
                dispatch({
                    type: "GETPERSON",
                    payload: response
                })
            }else{
                console.log(response)
            }
        }
        ApiGetSalesperson(handleFrontend)
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

    const addSalesperson = (data) => {
        
        const handleFrontend = (response, status) => {
            if(status === 201){
                dispatch(
                    {
                        type: "ADDPERSON",
                        payload: response
                    }
                )
            }else{
                console.log(response)
            }
        }

        ApiCreateSalesperson(handleFrontend, data)
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
    const updateSalesperson = (data) => {
        
        const handleFrontend = (response, status) => {
            if(status === 200){
                dispatch(
                    {
                        type: "MODPERSON",
                        payload: response
                    }
                )
            }else{
                console.log(response)
            }
        }
        ApiUpdateSalesperson(handleFrontend, data)
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
        ApiRemoveSales(handleFrontend, data.id)
    }    

    const removeSalesperson = (data) => {
        
        const handleFrontend = (response, status) => {
            if(status === 204){
                dispatch({
                    type: "DELPERSON",
                    payload: data.id
                })
            }else{
                console.log(response)
            }
        }
        ApiRemoveSalesperson(handleFrontend, data.id)
    } 
    return (
        <SalesContext.Provider
            value = {
                {
                    salesList: state.salesList,
                    salespersonList: state.salespersonList,
                    getSales,
                    addSales,
                    updateSales,
                    removeSales,
                    getSalesperson,
                    addSalesperson,
                    updateSalesperson,
                    removeSalesperson
                }
            }
        >
            {children}
        </SalesContext.Provider>
    )
}