
export function setProducts(string, products) {
    return { type: "SET_PRODUCTS", payload: products  }
}

export function setQuery (string) {
    return { type: "SET_QUERY", payload: string}
}