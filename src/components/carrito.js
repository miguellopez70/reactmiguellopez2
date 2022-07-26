import React from 'react'
import './carrito.css';
import Producto from './Producto';


const carrito=({carrito,agregarProducto}) => (

<div className='carrito'>

<h2> Carrito de compras </h2>

{carrito.lenght === 0
? <p>  esta vacio el carrito </p>

:carrito.map (producto=>(

<Producto   
key={producto.id}
producto={producto}
// agrego
carrito={carrito}
agregarProducto={agregarProducto}


/>

) )}
</div>


)

export default carrito