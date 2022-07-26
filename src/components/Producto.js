import React from 'react';

const Producto = ({producto,carrito,agregarProducto,productos}) => {
    const {nombre, precio, id} = producto

    const seleccionarProducto = id =>{
        const producto = productos.filter(producto =>producto.id ===id)[0];
        agregarProducto([
            ...carrito,
            producto
        ])
     }
        //elimina el producto del carrito
        const eliminarProducto = id =>{
            const producto = carrito.filter(producto =>producto.id !== id)
            //coloca los state en el state
            agregarProducto(producto)
        }

    return(
              
       <div>
            <h2>{nombre}</h2>
            <p>{precio}</p>

        {productos

        ? ( <button
            type="button"
            onClick={()=>seleccionarProducto(id)}
            >Comprar</button>
          )
         :
          ( <button
                type="button"
                onClick={()=>eliminarProducto(id)}
                >Eliminar</button>
          )
                   
        }
        </div>
    )
}

export default Producto