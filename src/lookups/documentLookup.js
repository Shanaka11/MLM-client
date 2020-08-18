import {restrictedBackend} from "./baseLookup"

// Document *******************************************

export function ApiCreateDocument(callback, data){
    const method = "POST"
    const endpoint = "/user/document/"

    restrictedBackend(method, endpoint, callback, data, true)
}

export function ApiGetDocument(callback){
    const method = "GET"
    const endpoint = "/user/document/"
    restrictedBackend(method, endpoint, callback)
}