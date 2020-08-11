import React, { createContext, useReducer } from "react"
import SalesReducer from "./SalesReducer"
import {ApiCreateSales, ApiGetSales, ApiRemoveSales, ApiUpdateSales,
        ApiCreateSalesperson, ApiGetSalesperson, ApiRemoveSalesperson, ApiUpdateSalesperson,
        ApiGetConnectedSalespersons, ApiGetSalespersonDetails, ApiSearchSalesperson, ApiSearchSales} from "../lookups"

const initialState = {
    salesList: [],
    salespersonList: [],
    salesperson: "",
    connectedSalespersonList: []
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

    const getSalespersonDetail = (data) => {
        const handleFrontend = (response, status) => {
            if(status === 200){
                dispatch({
                    type: "GETPERSONDETAIL",
                    payload: response
                })
                getConnectedSalesperson(response.id)
            }else{
                console.log(response)
            }
        }
        ApiGetSalespersonDetails(handleFrontend, data)        
    }
    // Search
    const searchSalesperson = (data) => {
        const handleFrontend = (response, status) => {
            if(status === 200){
                dispatch({
                    type: "SEARCHPERSON",
                    payload: response
                })
            }else{
                console.log(response)
            }
        }
        ApiSearchSalesperson(handleFrontend, data)
    }

    const searchSales = (data) => {
        const handleFrontend = (response, status) => {
            if(status === 200){
                dispatch({
                    type: "SEARCSALES",
                    payload: response
                })
            }else{
                console.log(response)
            }
        }
        ApiSearchSales(handleFrontend, data)
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
        console.log(data)
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
    // Get Connected Salesperson
    const getConnectedSalesperson = (data) => {
        const handleFrontend = (response, status) => {
            if(status === 200){
                dispatch({
                    type: "CONNECTED",
                    payload: response
                })
            }else{
                console.log(response)
            }
        }
        ApiGetConnectedSalespersons(handleFrontend, data)
    } 
    return (
        <SalesContext.Provider
            value = {
                {
                    salesList: state.salesList,
                    salespersonList: state.salespersonList,
                    connectedSalespersonList: state.connectedSalespersonList,
                    salesperson: state.salesperson,
                    getSales,
                    addSales,
                    updateSales,
                    removeSales,
                    getSalesperson,
                    addSalesperson,
                    updateSalesperson,
                    removeSalesperson,
                    getConnectedSalesperson,
                    getSalespersonDetail,
                    searchSalesperson,
                    searchSales
                }
            }
        >
            {children}
        </SalesContext.Provider>
    )
}