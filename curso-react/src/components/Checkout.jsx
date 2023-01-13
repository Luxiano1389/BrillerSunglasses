import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import "../css/Checkout.css";

const Checkout = () => {
    const [nombre, setNombre] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [orderId, setOrderId] = useState("");
    const { cart, clear, sumaTotal } = useContext(CartContext);


    const generarOrden = () => {
        const fecha = new Date();
        const order = {
            buyer: { name: nombre, telephone: telefono, email: email },
            items: cart.map(item => ({ id: item.id, title: item.nombre, price: item.precio })),
            total: sumaTotal(),
            orderDate: `${fecha.getFullYear()}-${fecha.getMonth() + 1}-${fecha.getDate()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`
        };

        const db = getFirestore();
        const ordersCollection = collection(db, "ordenes");
        addDoc(ordersCollection, order).then((id) => {
            setOrderId(id.id);
            clear();
        })
    }

    return (
        <div className="contenedor-checkout">
            <div className="container">
                <div className="row">
                    {orderId != "" ?
                        <div className="alert alerta text-center orden" role="alert">¡Su orden <b>{orderId}</b> ha sido generada con éxito! <br /> Recibirá un e-mail con los detalles de su compra. <br /><b>Gracias por elegirnos.</b></div>
                        : ""}
                    <div className="col-md-6 formulario">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to={"/cart"}>Carrito</Link></li>
                                <li className="breadcrumb-item"><b>Información</b></li>
                                <li className="breadcrumb-item active" aria-current="page">Envíos</li>
                                <li className="breadcrumb-item active" aria-current="page">Pagos</li>
                            </ol>
                        </nav>
                        <form className="formulario-checkout">
                            <div className="form-floating mb-3">
                                <input type="text" required className="form-control" id="floatingInput" onInput={(e) => { setNombre(e.target.value) }} />
                                <label for="floatingInput">Nombre Completo</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="number" required className="form-control" id="floatingInput" onInput={(e) => { setTelefono(e.target.value) }} />
                                <label for="floatingInput">Teléfono</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="email" required className="form-control" id="floatingInput" onInput={(e) => { setEmail(e.target.value) }} />
                                <label for="floatingInput">E-mail</label>
                            </div>
                            <div className="input-group-text">
                                <input className="form-check-input mt-0 me-3" type="radio" value="" aria-label="Radio button for following text input" />
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-shop" viewBox="0 0 16 16">
                                    <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z" />
                                </svg>
                                <p className="ms-2 mt-3">Retiro</p>
                            </div>
                            <div className="input-group-text mt-0">
                                <input className="form-check-input mt-0 me-3" type="radio" value="" aria-label="Radio button for following text input" />
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-truck" viewBox="0 0 16 16">
                                    <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                </svg>
                                <p className="ms-2 mt-3">Envío</p>
                            </div>
                            <button type="button" className="btn btn-dark btn-caja1" onClick={generarOrden}>Finalizar compra</button>
                        </form>
                    </div>
                    <div className="col-md-6 formulario-productos">
                        <table className="table table-borderless">
                            <tbody className="align-middle">
                                {cart.map(item => (
                                    <tr key={item.id}>
                                        <div className="position-relative mt-3">
                                            <td scope="row"><img src={item.imagen} alt={item.nombre} width={100} /></td>
                                            <span className="mensaje">
                                                {item.cantidad}</span>
                                        </div>
                                        <td scope="row" className="nombre-carrito">{item.nombre}</td>
                                        <td scope="row" className="text-end total-carrito">${Math.round(item.cantidad * item.precio)}.000</td>
                                    </tr>
                                ))}
                                <tr className="tabla-carrito1">
                                    <td colSpan={1} className="total-carrito"><b> Total</b></td>
                                    <td colSpan={3} className="text-end total-suma"><b>ARS ${sumaTotal()}.000</b></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Checkout;