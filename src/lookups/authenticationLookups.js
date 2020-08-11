import {backendLookup, restrictedBackend} from './baseLookup'

export function ApiAuthenticate(callback, data){

    const method = "POST"
    const endpoint = "/user/token"

    backendLookup(method, endpoint, callback, data)
}

export function ApiGetUser(callback){
    const method = 'GET'
    const endpoint = "/user/user"
    restrictedBackend(method, endpoint, callback)
}

export function ApiRegisterUser(callback, data){
    const method = "POST"
    const endpoint = "/user/create"
    backendLookup(method, endpoint, callback, data)
}

export function ApiRegisterAdmin(callback, data){
    const method = "POST"
    const endpoint = "/user/create/admin"
    restrictedBackend(method, endpoint, callback, data)
}

export function ApiUpdateUser(callback, data){
    const method = "POST"
    const endpoint = "/user/update"
    restrictedBackend(method, endpoint, callback, data)
}