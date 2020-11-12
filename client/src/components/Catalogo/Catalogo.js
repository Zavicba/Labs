import React from "react"
import Product from "../ProductCard/ProductCard"
import { connect } from "react-redux";




const CatalogoContainer = ({ products, query }) => {
    console.log('viendo que hay en products')
    console.log(products)
    
    console.log('viendo que hay en query')
    console.log(query) 
    
    let view = products.filter(function(element){
        return element[query]
      })
    
      console.log("viendo si filtra los elementos segun el query")
      if(query) console.log(view[0])

    if(products && query) {
        return (
        
            <div>
                ${ view[0][query].map(prod => {
                return <Product
                    imagen={prod.thumbnail}
                    titulo={prod.title}
                    precio={prod.price}
                    condicion={prod.condition}
                    stock={prod.available_quantity}
                    />
            })
    
                }
            </div>
        )
    } else {
        return (
            <div>
                ingrese el nombre de un producto
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

