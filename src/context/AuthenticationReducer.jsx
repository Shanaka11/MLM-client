export default (state, action) => {
    switch(action.type){
        case 'LOGIN':
            return {
                ...state,
                logged: true,
                username: action.payload.user.username,
                role:"ADMIN"
            }
        case 'LOGOUT':
            return {
                ...state,
                logged: false,
                username: "",
                role: ""
            }
        case 'USER':
            return {
                ...state,
                username: action.payload.username,
                role: action.payload.role
            }
        default:
            return state
    }
}