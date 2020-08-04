export default (state, action) => {
    switch(action.type){
        case "GET":
            return {
                ...state,
                salesList: action.payload
            }
        case "ADD":
            return {
                ...state,
                salesList: [action.payload, ...state.salesList]
            }
        case "MOD":
            return state
        case "DEL":
            return {
                ...state,
                salesList: []
            }
        default:
            return state
    }
}