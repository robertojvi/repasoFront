/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

const Producto = ({ producto, setIsSelected }) => {
  //   console.log(espectaculo);

    return (
        <div>
        <img src={producto.image} alt="" />
        <h3>{producto.product}</h3>
        <h4>{producto.description}</h4>
        <h2>${producto.price}</h2>
        <button
            onClick={() => setIsSelected({ product: producto.product, status: true })}
        >
            Quiero comprar!
        </button>
        </div>
    );
};

export default Producto;
