import jwt_decode from 'jwt-decode'
// Have the refresh token stored in a cookie with secure and http-only 
export function backendLookup(method, endpoint, callback, data){

        let token = localStorage.getItem("token") ? localStorage.getItem("token") : null
        let jsonData;
        if (data){
            jsonData = JSON.stringify(data)
        }
        const xhr = new XMLHttpRequest()
        const url = `http://localhost:8000/api${endpoint}` 
    
        xhr.responseType = "json"
        xhr.open(method, url)
        xhr.setRequestHeader("Content-Type", "application/json")
        // Check first if the user is already logged in
        // Add CSRF tokens as well
        xhr.withCredentials = true
        if(token){
            // Check if the token is expiered if so get a new token via refresh token
            xhr.setRequestHeader("Authorization", `Bearer ${token}`)
        }
        xhr.onload = function(){
            callback(xhr.response, xhr.status)
        }
    
        xhr.onerror = function(e) {
            callback({"message": "The request was an error"}, 400)
        }
        xhr.send(jsonData)    
}
// Change the method name to something like restrictedBackend
export function restrictedBackend(method, endpoint, callback, data){
    // use the global variable 'token' instead of currToken
    let getNewAccessToken = true
    let token = localStorage.getItem("token") ? localStorage.getItem("token") : null

    if(token){
        const decodedToken = jwt_decode(token)
        // Check if the token is expired if so get a new one
        if(decodedToken.exp > Date.now()/1000){
            getNewAccessToken = false
        }
    }
    // Check if the logged is true in the client storage before getting the new token
    if(getNewAccessToken && localStorage.getItem("token")){
        const xhr = new XMLHttpRequest()
        const url = `http://localhost:8000/api/user/refresh`
        xhr.responseType = "json"        

        // Check the token to see if its expiered if expiered fetch a new one via the refresh token
        // Send the refresh token with this request and get a new access token
        xhr.open('POST', url)
        xhr.setRequestHeader("Content-Type", "application/json")   
        xhr.withCredentials = true     
        xhr.onload = function (){
            // console.log(xhr.response.access)
            localStorage.setItem("token", xhr.response.access)
            backendLookup(method, endpoint, callback, data)
        }   

        xhr.onerror = function(e) {
            console.log(e)
        }
        xhr.send()
    }else{
        backendLookup(method, endpoint, callback, data)
    }

}