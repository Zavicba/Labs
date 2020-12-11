
export function setProducts(string, products) {
    return { type: "SET_PRODUCTS", payload: products  }
}

export function setQuery (string) {
    return { type: "SET_QUERY", payload: string}
}

export function setQuerySearched (string) {
    return { type: "SET_QUERY_SEARCHED", payload: string}
}

export function setPaginated () {
    return { type: "SET_PAGINATED"}
}

export function setPageNumber(value) {
    return { type: "SET_PAGE_NUMBER" , payload: value}
}


