
const initialState = {
    products: [],
    query: "",
    querySearched: [],
    paginated: false,
    pageNumber: 1,
    numberOfPages: 5,

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
        case "SET_PAGINATED":
            return {
                ...state,
                paginated: !(state.paginated)              
            }
        case "SET_PAGE_NUMBER":
            return {
                ...state,
                pageNumber: action.payload
            }               
        default: return state

    }

}

export default rootReducer;