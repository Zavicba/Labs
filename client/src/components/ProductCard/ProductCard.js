import React from "react";


const Product = ({ imagen, titulo, precio, condicion, stock }) => {
return(
    <div className="card" >
        <img src={imagen} class="card-img-top" alt="..." />
        <div class="card-body">
            <h5 class="card-title">{titulo}</h5>
            <p class="card-text">Precio: {precio}</p>
            <p class="card-text">Condicion: {condicion}</p>
            <p class="card-text">Stock: {stock}</p>
        </div>
    </div>

)
    
}

export default Product;
