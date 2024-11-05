import { useState } from "react";
import "./App.css";
import Producto from "./components/Producto";
import { productos } from "./productos";
import Form from "./components/Form";

function App() {
  const [isSelected, setIsSelected] = useState({
    product: null,
    status: false,
  });

  return (
    <div>
      {isSelected.status ? <Form product={isSelected.product} /> : null}
      {productos.map((producto) => (
        <Producto
          key={producto.id}
          setIsSelected={setIsSelected}
          producto={producto}
        />
      ))}
    </div>
  );
}

export default App;
