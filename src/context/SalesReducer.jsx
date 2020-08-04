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
            const index = state.salesList.findIndex(sale => sale.id === action.payload.id)
            state.salesList[index] = {
                "id": action.payload.id,
                "total": action.payload.total,
                "commission_perc": action.payload.commission_perc,
                "salesperson": action.payload.salesperson
            }
            return {
                ...state,
                salesList: state.salesList
            }
        case "DEL":
            return {
                ...state,
                salesList: state.salesList.filter(sale => sale.id !== action.payload)
            }
        default:
            return state
    }
}