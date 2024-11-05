// eslint-disable-next-line no-unused-vars
import React from 'react'

// eslint-disable-next-line react/prop-types
const Card = ({nombre, product}) => {
    return (
        <div>
            <h3>Gracias, {nombre}!</h3>
            <h3>Estamos procesando tu pedido del producto:  {product}.</h3>
        </div>
    )
}

export default Card