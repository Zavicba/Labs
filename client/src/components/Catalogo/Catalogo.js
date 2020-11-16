import React, { useState } from "react"
import Product from "../ProductCard/ProductCard"
import { connect } from "react-redux";

const containerDiv = {
    display: "grid",
    gridTemplateColumns: " 7rem 40rem ",
    gridGap: "5px 5px",
    justifyItems: "center",
    gridTemplateAreas: " 'filter prod prod prod' 'filter prod prod prod' 'filter prod prod prod' ",
    justifyContent: "space-between",
    paddingTop: "20px",
    backgroundColor: "#F7F9F9",
    borderRadius: "8px"
}
const filterBar = {
    gridArea: "filter",
    position: "fixed"
}

const prodDiv = {
    gridArea: "prod",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    backgroundColor: "#F0F3F4",
    padding: "10px 0px 10px 0px"
}

const CatalogoContainer = ({ products, query }) => {

    console.log(products)

    const [filter, setFilter] = useState("")
    
    let orden = { new: 2, used: 1 }

    let view = products.filter(function (element) {
        return element[query]
    })

    if (filter === "menor") {
        view[0][query].sort(function (a, b) {
            return (a.price - b.price)
        })
    }

    if (filter === "mayor") {
        view[0][query].sort(function (a, b) {
            return (b.price - a.price)
        })
    }
    

    if (filter === "used") {
        view[0][query].sort(function(a,b) {
            return (orden[a.condition] - orden[b.condition])
        })
    }
    if (filter === "new") {
        view[0][query].sort(function(a,b) {
            return (orden[b.condition] - orden[a.condition])
        })
    }


    if (products && query) {
        return (

            <div className="container-fluid " style={containerDiv}>

                <div className="list-group" style={filterBar}>
                    <a className="list-group-item list-group-item-action active" >Filtrar por:</a>
                    <a className="list-group-item list-group-item-action">Precio:</a>
                    <a className="list-group-item list-group-item-action" onClick={() => setFilter("menor")} value="menor">menor</a>
                    <a className="list-group-item list-group-item-action" onClick={() => setFilter("mayor")} value="mayor">mayor</a>
                    <a className="list-group-item list-group-item-action" >Condicion:</a>
                    <a className="list-group-item list-group-item-action" onClick={() => setFilter("used")} value="usado">usado</a>
                    <a className="list-group-item list-group-item-action" onClick={() => setFilter("new")} value="nuevo">nuevo</a>

                </div>
                <div style={prodDiv}>
                    {view[0][query].map((prod, key) => {
                        return <Product
                            key={key}
                            imagen={prod.thumbnail}
                            titulo={prod.title}
                            precio={prod.price}
                            condicion={prod.condition}
                            stock={prod.available_quantity}
                            moneda={prod.currency_id}
                        />
                    })

                    }
                </div>

            </div>
        )
    } else {
        return (
            <div className=" container-fluid slider d-flex justify-content-center align-items-center">
                <p className="lead ">Bienvenido a tu Tu Tienda Online un lugar donde encontrara lo que busca 
               </p>
            </div>
        )
    }

}
//imagen, titulo, precio, condicion, stock

const mapStateToProps = (state) => {
    return {
        products: state.products,
        query: state.query
    }
}


export default connect(mapStateToProps, undefined)(CatalogoContainer);

