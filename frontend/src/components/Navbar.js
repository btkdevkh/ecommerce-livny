import { Link } from "react-router-dom";
import { Button, Modal } from 'react-bootstrap'
import { useState, useContext } from "react";
import { CartContext } from '../context/CartContext'
import CartProduct from "./CartProduct";

export default function Navbar() {
  const [show, setShow] = useState(false)
  const cart = useContext(CartContext)

  const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0)

  function handleShow() {
    setShow(true)
  }

  function handleClose() {
    setShow(false)
  }

  async function checkout() {
    await fetch('http://localhost:4000/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({items: cart.items})
    })
    .then(res => {
      return res.json()
    })
    .then(res => {
      if(res.url) {
        window.location.assign(res.url)
      }
    })
  }

  return (
    <>
      <header className="navbar">
        <div className="container">
          <Link to={'/'}>
            <h1><span className="e-store"></span>លីវនីផានី</h1>
          </Link>
          <nav>
            <ul>
              <li>
                <Link to={'/products'}>ផលិតផល</Link>
              </li>
              <li>
                <Link to={'/about'}>អំពីលីវនីនិងផានី</Link>
              </li>
              <li>
                <button className="cart-item" onClick={handleShow}>Cart {productsCount} Item</button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Modal 
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {productsCount > 0 ?
            <>
              <p>Items in your cart:</p>
              {cart.items.map((currentProduct, idx) => (
                <CartProduct 
                  key={idx} 
                  currentProduct={currentProduct} 
                />
              ))}

              <h2>Total: {cart.getTotalCost().toFixed(2)}</h2>

              <Button 
                variant="success"
                onClick={checkout}
              >
                Purchase Items
              </Button>
            </>
            :
            <h2>There are no items in your cart</h2>
          }
        </Modal.Body>
      </Modal>
    </>
  )
}
