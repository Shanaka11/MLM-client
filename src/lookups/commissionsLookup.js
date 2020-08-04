import {restrictedBackend} from "./baseLookup"

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
    console.log("data")
    restrictedBackend(method, endpoint, callback)
}
