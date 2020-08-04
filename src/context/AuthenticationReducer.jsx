export default (state, action) => {
    switch(action.type){
        case 'LOGIN':
            return {
                ...state,
                logged: true,
                username: action.payload.user.username,
                role:"ADMIN"
            }
        case 'USER':
            return {
                ...state,
                username: action.payload.username,
                role:"ADMIN"
            }
        default:
            return state
    }
}