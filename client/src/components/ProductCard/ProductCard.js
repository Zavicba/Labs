import React from "react";
import styled from 'styled-components'

const img = {
    justifyContent: "center",
    //minwidth: "100px",
    //  maxWidth:"200px",
    //maxHeigth: "200px",
    width: "8rem",
    height: "12rem",
    background: "silver"
}

const divCard = {
    justifyContent: "space-around",
    alignItems: "center",
    padding: "10px 0px 5px 0px",
    width: "15rem",
    height: "26rem",
    borderRadius: "5px",
    borderColor: "#99A3A4",
    margin: "5px 0px 5px 0px",
    backgroundColor: "F0F3F4"
}

const divImg = {
    justifyContent: "center",
}

const cardTitle = {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical"
}

const Product = ({ imagen, titulo, precio, condicion, stock, moneda }) => {
    return (
        <div className="card" style={divCard} >
            <div style={divImg}>
                <img src={imagen} style={img} className="card-img-top" alt="Image 1" />
            </div>

            <div className="card-body">
                <h6 className="card-title" style={cardTitle}>{titulo}</h6>
                <p className="card-text">Precio: {precio} {moneda}</p>
                <p className="card-text">Condicion: {condicion}</p>
                <p className="card-text">Stock: {stock}</p>
            </div>
        </div>

    )

}

export default Product;
