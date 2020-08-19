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

// Image ************************************************

export function ApiCreateImage(callback, data){
    const method = "POST"
    const endpoint = "/user/ads/"

    restrictedBackend(method, endpoint, callback, data, true)
}

export function ApiGetImages(callback){
    const method = "GET"
    const endpoint = "/user/ads/"
    restrictedBackend(method, endpoint, callback)
}

export function ApiGetImage(callback, id){

}

export function ApiDelImage(callback, id){
    const method = "DELETE"
    const endpoint = `/user/ads/${id}/`
    restrictedBackend(method, endpoint, callback)
}