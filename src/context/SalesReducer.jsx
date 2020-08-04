export default (state, action) => {
    let index
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
            index = state.salesList.findIndex(sale => sale.id === action.payload.id)
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
        case "GETPERSON":
            return {
                ...state,
                salespersonList: action.payload
            }
        case "ADDPERSON":
            return {
                ...state,
                salespersonList: [action.payload, ...state.salespersonList]
            }
        case "MODPERSON":
            index = state.salespersonList.findIndex(salesperson => salesperson.id === action.payload.id)
            state.salespersonList[index] = {
                "id": action.payload.id,
                "name": action.payload.name,
                "address": action.payload.address,
                "cell": action.payload.cell,
                "sponser": action.payload.sponser,
                "realestate": action.payload.realestate
            }
            return {
                ...state,
                salespersonList: state.salespersonList
            }
        case "DELPERSON":
            return {
                ...state,
                salespersonList: state.salespersonList.filter(salesperson => salesperson.id !== action.payload)
            }            
        default:
            return state
    }
}