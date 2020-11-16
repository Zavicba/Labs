
const initialState = {
    products: [],
    query: "",
    querySearched: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_PRODUCTS":
            return {
                ...state,
                products: state.products.concat(action.payload)
            }
        case "SET_QUERY":
            return {
                ...state,
                query: action.payload
            }
        case "SET_QUERY_SEARCHED":
            return {
                ...state,
                querySearched: state.querySearched.concat(action.payload)
            }    
        default: return state

    }

}

export default rootReducer;