import React, { useState } from "react"
import Product from "../ProductCard/ProductCard"
import { connect } from "react-redux";
import { setPageNumber, setPaginated } from "../../actions/index"
import "./Catalogo.css";

const CatalogoContainer = ({ products, query, paginated, pageNumber, setPageNumber, setPaginated }) => {

    const [filter, setFilter] = useState("")

    let orden = { new: 2, used: 1 }
    
    let view = products.filter(function (element) {
        return element[query]
    })
    
    let findNew = {}
    let findUsed = {}

    if (query && products) {
        findNew = view[0][query].find(el => el.condition === "new")
        findUsed = view[0][query].find(el => el.condition === "used")  
    }

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
        view[0][query].sort(function (a, b) {
            return (orden[a.condition] - orden[b.condition])
        })
    }
    if (filter === "new") {
        view[0][query].sort(function (a, b) {
            return (orden[b.condition] - orden[a.condition])
        })
    }

    let items = []
    let j = 0;
    if (paginated === true && products && query) {
        for (var i = 0; i < view[0][query].length; i += 12) {
            items[j] = view[0][query].slice(i, i + 12)
            j++
        }
    }



    if (products && query && paginated === false) {
        if (findNew && findUsed) {
            return (
                <div className="container-fluid " id="containerDiv">

                    <div className="list-group" id="filterBar">
                        <a className="list-group-item list-group-item-action active " >Filtrar :</a>
                        <a className="list-group-item list-group-item-action" >Precio:</a>
                        <a className="list-group-item list-group-item-action" onClick={() => setFilter("menor")} value="menor">menor</a>
                        <a className="list-group-item list-group-item-action" onClick={() => setFilter("mayor")} value="mayor">mayor</a>
                        <a className="list-group-item list-group-item-action" >Condicion:</a>
                        <a href="#" className="list-group-item list-group-item-action" onClick={() => setFilter("used")} value="usado">usado</a>
                        <a href="#" className="list-group-item list-group-item-action" onClick={() => setFilter("new")} value="nuevo">nuevo</a>
                        <a href="#" className="list-group-item list-group-item-action" onClick={() => setPaginated()} value="paginar">Paginar</a>

                    </div>
                    <div id="prodDiv">
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

                <div className="container-fluid " id="containerDiv">

                    <div className="list-group" id="filterBar">
                        <a className="list-group-item list-group-item-action active" >Filtrar :</a>
                        <a className="list-group-item list-group-item-action">Precio:</a>
                        <a className="list-group-item list-group-item-action" onClick={() => setFilter("menor")} value="menor">menor</a>
                        <a className="list-group-item list-group-item-action" onClick={() => setFilter("mayor")} value="mayor">mayor</a>
                        <a className="list-group-item list-group-item-action" onClick={() => setPaginated()} value="paginar">Paginar</a>
                    </div>
                    <div id="prodDiv">
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
        }
    } else if ((products && query) && paginated === true) {

        if (findUsed && findNew) {
            return (
                <div className="container-fluid " id="containerDiv">

                    <div className="list-group" id="filterBar">
                        <a className="list-group-item list-group-item-action active" >Filtrar :</a>
                        <a className="list-group-item list-group-item-action">Precio:</a>
                        <a className="list-group-item list-group-item-action" onClick={() => setFilter("menor")} value="menor">menor</a>
                        <a className="list-group-item list-group-item-action" onClick={() => setFilter("mayor")} value="mayor">mayor</a>
                        <a className="list-group-item list-group-item-action" >Condicion:</a>
                        <a className="list-group-item list-group-item-action" onClick={() => setFilter("used")} value="usado">usado</a>
                        <a className="list-group-item list-group-item-action" onClick={() => setFilter("new")} value="nuevo">nuevo</a>
                        <a className="list-group-item list-group-item-action" onClick={() => setPaginated()} value="paginar">Paginar</a>
                        <ul class="pagination pagination-sm">
                            <li class="page-item"><a class="page-link" href="#" onClick={() => setPageNumber(1)}>1</a></li>
                            <li class="page-item"><a class="page-link" href="#" onClick={() => setPageNumber(2)}>2</a></li>
                            <li class="page-item"><a class="page-link" href="#" onClick={() => setPageNumber(3)}>3</a></li>
                            <li class="page-item"><a class="page-link" href="#" onClick={() => setPageNumber(4)}>4</a></li>
                            
                        </ul>
                    </div>
                    <div id="prodDiv">
                        {items[pageNumber - 1].map((prod, key) => {

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

                <div className="container-fluid " id="containerDiv">

                    <div className="list-group" id="filterBar">
                        <a className="list-group-item list-group-item-action active" >Filtrar :</a>
                        <a className="list-group-item list-group-item-action">Precio:</a>
                        <a className="list-group-item list-group-item-action" onClick={() => setFilter("menor")} value="menor">menor</a>
                        <a className="list-group-item list-group-item-action" onClick={() => setFilter("mayor")} value="mayor">mayor</a>

                        <a className="list-group-item list-group-item-action" onClick={() => setPaginated()} value="paginar">Paginar</a>
                        <ul class="pagination pagination-sm">
                            <li class="page-item"><a class="page-link" href="#" onClick={() => setPageNumber(1)}>1</a></li>
                            <li class="page-item"><a class="page-link" href="#" onClick={() => setPageNumber(2)}>2</a></li>
                            <li class="page-item"><a class="page-link" href="#" onClick={() => setPageNumber(3)}>3</a></li>
                            <li class="page-item"><a class="page-link" href="#" onClick={() => setPageNumber(4)}>4</a></li>
                            
                        </ul>
                    </div>
                    <div id="prodDiv">
                        {items[pageNumber - 1].map((prod, key) => {

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
        }

    } else {
        return (
            <div className=" container-fluid slider d-flex justify-content-center align-items-center">
                <p className="lead ">Bienvenido a tu Tu Tienda Online un lugar donde encontrara lo que busca
               </p>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        products: state.products,
        query: state.query,
        paginated: state.paginated,
        pageNumber: state.pageNumber,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setPaginated: () => dispatch(setPaginated()),
        setPageNumber: (value) => dispatch(setPageNumber(value))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CatalogoContainer);

