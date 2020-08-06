import {restrictedBackend} from "./baseLookup"

// Sales *******************************************

export function ApiCreateSales(callback, data){
    const method = "POST"
    const endpoint = "/commissions/sales/"

    restrictedBackend(method, endpoint, callback, data)
}

export function ApiGetSales(callback){
    const method = "GET"
    const endpoint = "/commissions/sales/"

    restrictedBackend(method, endpoint, callback)
}

export function ApiUpdateSales(callback, data){
    const method = "PUT"
    const endpoint = `/commissions/sales/${data.id}/`

    restrictedBackend(method, endpoint, callback, data)
}

export function ApiRemoveSales(callback, data){
    const method = "DELETE"
    const endpoint = `/commissions/sales/${data}/`    
    restrictedBackend(method, endpoint, callback)
}

// Salesperson *******************************************

export function ApiCreateSalesperson(callback, data){
    const method = "POST"
    const endpoint = "/commissions/salesperson/"

    restrictedBackend(method, endpoint, callback, data)
}

export function ApiGetSalesperson(callback){
    const method = "GET"
    const endpoint = "/commissions/salesperson/"

    restrictedBackend(method, endpoint, callback)
}

export function ApiGetSalespersonDetails(callback, data){
    const method = "GET"
    const endpoint = "/commissions/salesperson/" + data

    restrictedBackend(method, endpoint, callback)
}

export function ApiUpdateSalesperson(callback, data){
    const method = "PUT"
    const endpoint = `/commissions/salesperson/${data.id}/`

    restrictedBackend(method, endpoint, callback, data)
}

export function ApiRemoveSalesperson(callback, data){
    const method = "DELETE"
    const endpoint = `/commissions/salesperson/${data}/`    
    restrictedBackend(method, endpoint, callback)
}

// Salesperson - Extra
export function ApiGetConnectedSalespersons(callback, id){
    const method = "GET"
    const endpoint = `/commissions/connected_salesperson/${id}`
    restrictedBackend(method, endpoint, callback)
}