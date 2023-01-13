import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";
import "../css/Cart.css";

const Cart = () => {

    const { cart, cartTotal, removeItem, sumaTotal, clear } = useContext(CartContext);

    if (cartTotal() === 0) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12 carrito-vacio">
                        <p>Su carrito está vacío</p>
                        <Link to={"/category"} className="btn btn-dark btn-carrito">comprar productos</Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-10 offset-1">
                    <p className="text-center titulo-carrito">CARRITO</p>
                    <div>
                        <table className="table table-borderless">
                            <thead>
                                <tr>
                                    <td colSpan={4} className="text-end" onClick={clear}>
                                        <button type="button" className="btn btn-outline-dark btn-vaciar text-uppercase mb-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3 me-2" viewBox="0 0 16 16">
                                                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"></path>
                                            </svg>
                                            Vaciar carrito
                                        </button>
                                    </td>
                                </tr>
                                <tr className="tabla-carrito">
                                    <th scope="col">Producto</th>
                                    <th scope="col">&nbsp;</th>
                                    <th className="text-center" scope="col">Cantidad</th>
                                    <th className="text-end" scope="col">Total</th>
                                </tr>
                            </thead>
                            <tbody className="align-middle">
                                {cart.map(item => (
                                    <tr key={item.id} className="contenedor-carrito">
                                        <td><img src={item.imagen} alt={item.nombre} width={100} /></td>
                                        <td className="nombre-carrito text-start ">{item.nombre} <br /> <b>${item.precio}.000</b></td>
                                        <td className="text-center cantidad-carrito">{item.cantidad} <br /> <Link className="eliminar-carrito" onClick={() => { removeItem(item.id) }}>Eliminar</Link></td>
                                        <td className="text-end total-carrito">${Math.round(item.cantidad * item.precio)}.000</td>
                                    </tr>
                                ))}
                                <tr className="tabla-carrito1">
                                    <td colSpan={1} className="espacio-carrito">&nbsp;</td>
                                    <td colSpan={3} className="text-end"><b>Total: ${sumaTotal()}.000 ARS</b></td>
                                </tr>
                                <tr>
                                    <td colSpan={1} className="espacio-carrito">&nbsp;</td>
                                    <td colSpan={3} className="text-end gastos-carrito">Gastos de envío e impuestos calculados al finalizar la compra</td>
                                </tr>
                                <tr>
                                    <td colSpan={1} className="espacio-carrito">&nbsp;</td>
                                    <td colSpan={3} className="text-end"><Link to={"/checkout"} className="btn btn-dark btn-caja1">PASAR POR CAJA</Link></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;