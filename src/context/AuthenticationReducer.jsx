export default (state, action) => {
    switch(action.type){
        case 'LOGIN':
            return {
                ...state,
                logged: true,
                username: action.payload.user.username,
                role: action.payload.user.role,
                salesperson_id: action.payload.user.salesperson                
            }
        case 'LOGOUT':
            return {
                ...state,
                logged: false,
                username: "",
                role: "",
                salesperson_id: "",
                email: ""
            }
        case 'USER':
            return {
                ...state,
                username: action.payload.username,
                role: action.payload.role,
                salesperson_id: action.payload.salesperson,
                email: action.payload.email
            }
        default:
            return state
    }
}