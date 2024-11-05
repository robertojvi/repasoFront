import { useState } from "react";
import Card from "./Card.jsx";

const Form = ({ product }) => {
  //Variables useState
    const [comprador, setComprador] = useState({
        nombre: "",
        email: "",
    });
    const [mostrar, setMostrar] = useState(false);
    const [error, setError] = useState(false);
  //Validaciones
    const handleSubmit = (event) => {
        event.preventDefault();
        let regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (
        comprador.nombre.length > 6 &&
        comprador.nombre.includes(" ") &&
        regexEmail.test(comprador.email)
        ) {
        setMostrar(true);
        setError(false);
        } else {
        // setMostrar(false)
        setError(true);
        }
    };
    return (
        <div>
        {mostrar ? (
            <Card product={product} nombre={comprador.nombre} />
        ) : (
            <form onSubmit={handleSubmit}>
            {/* onsubmit */}
            <label>Nombre completo:</label>
            {/* onchange */}
            <input
                type="text"
                onChange={(event) =>
                setComprador({ ...comprador, nombre: event.target.value })
                }
            />
            <label>Email:</label>
            <input
                type="email"
                onChange={(event) =>
                setComprador({ ...comprador, email: event.target.value })
                }
            />
            <button>Comprar producto</button>
            {error && (
                <h4 style={{ color: "red" }}>
                Coloque la información correctamente
                </h4>
            )}
            </form>
        )}
        </div>
    );
};

export default Form;
