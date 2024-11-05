
import React from 'react'


const Card = ({nombre, product}) => {
    return (
        <div>
            <h3>Gracias, {nombre}!</h3>
            <h3>Estamos procesando tu pedido del producto:  {product}.</h3>
        </div>
    )
}

export default Card