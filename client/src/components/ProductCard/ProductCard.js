import React from "react";
import "./ProductCard.css";

const Product = ({ imagen, titulo, precio, condicion, stock, moneda }) => {
    return (
        <div className="card" id="divCard">
            <div id="divImagen" >
               <img src={imagen}  id="imagen" alt="Image 1" />
            </div>

            <div className="card-body">
                <h6 className="card-title" id="cardTitle" >{titulo}</h6>
                <p className="card-text">Precio: {moneda} {precio} </p>
                <p className="card-text">Condicion: {condicion}</p>
                <p className="card-text">Stock: {stock}</p>
            </div>
        </div>

    )

}

export default Product;
