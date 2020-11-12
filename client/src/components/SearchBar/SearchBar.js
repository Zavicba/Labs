import React, { useState } from "react";
import { setProducts, setQuery } from "../../actions/index"
import { connect } from "react-redux";

/* const searchCache = products.filter(function(el){
         return el === string
     })
       */

function searchProducts(string) {

    return fetch("http://localhost:3003/api/search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({string})
    })
        .then(response => response.json())
}

const SearchBar = ({ setProducts, setQuery }) => {

    const [string, setString] = useState("")

    const onButtonClick = async () => {
        const response = await searchProducts(string)
       
        setProducts(string, response)
        setQuery(string)
    }

    
    return (
        
        <nav className="navbar navbar-dark " >

            <p>tu tienda online</p>
            <a className="navbar-brand"></a>
            <div className="form-inline">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) => setString(e.target.value)} />
                <button className="btn btn-dark my-2 my-sm-0"  onClick={() => onButtonClick()}>Search</button>
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
} 

const mapDispatchToProps = (dispatch) => {
    return {
        setProducts: (string, products) => dispatch(setProducts(string, products)),
        setQuery: (string) => dispatch(setQuery(string))
    }
}



export default connect(undefined, mapDispatchToProps)(SearchBar);


