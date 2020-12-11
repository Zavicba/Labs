import React, { useState } from "react";
import { setProducts, setQuery, setQuerySearched } from "../../actions/index"
import { connect } from "react-redux";


const SearchBar = ({ setProducts, setQuery, querySearched, setQuerySearched , pageNumber}) => {

    const [string, setString] = useState("")

    function searchProducts(string) {

        let findIndex = querySearched.indexOf(string)
    
        if (findIndex === -1) {
            return fetch("http://localhost:3003/api/search", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ string, pageNumber })
            })
                .then(response => response.json())
        }else {
           return "productExist"
        }

    }


    const onButtonClick = async () => {
        const response = await searchProducts(string)
        if (response === "productExist") {
            setQuery(string)
        } else {
            setProducts(string, response)
            setQuery(string)
            setQuerySearched(string)
        }

    }

    return (

        <nav className="navbar navbar-dark"  >

            <h1 className="display-4">
                Tu Tienda Online
            </h1>
            <a className="navbar-brand"></a>
            <div className="form-inline">
                <input className="form-control mr-sm-2" type="search" placeholder="Que desea buscar ?" aria-label="Search" onChange={(e) => setString(e.target.value)} />
                <button className="btn btn-dark my-2 my-sm-0" type="submit" onClick={() => onButtonClick()}>Buscar</button>
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    return {
        products: state.products,
        querySearched: state.querySearched,
        pageNumber: state.pageNumber
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setProducts: (string, products) => dispatch(setProducts(string, products)),
        setQuery: (string) => dispatch(setQuery(string)),
        setQuerySearched: (string) => dispatch(setQuerySearched(string))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);


