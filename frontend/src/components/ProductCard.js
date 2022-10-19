import { CartContext } from '../context/CartContext'
import { useContext } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'

export default function ProductCard({ product }) {
  const { title, rating, path, price } = product
  const cart = useContext(CartContext)
  const productQTY = cart.getProductQTY(product.id)

  return (
    <div className="product-card">
      <h3>{title}</h3>
      <div className="rating">មតិ: {rating}</div>
      <div className="path">
        <img src={path} alt={title} />
      </div>
      <div>តម្លៃ: {price} $</div>
      {productQTY > 0 ? 
        <>
          <Form as={Row}>
            <Form.Label column="true" sm="6">In Cart: {productQTY}</Form.Label>
            <Col sm="6">
              <Button sm="6" className="mx-2" onClick={() => cart.addOneToCart(product.id)}>+</Button>
              <Button sm="6" className="mx-2" onClick={() => cart.removeOneFromCart(product.id)}>-</Button>
            </Col>
          </Form>
          <Button variant="danger" className="my-2" onClick={() => cart.deleteFromCart(product.id)}>Remove From Cart</Button>
        </>
        :
        <button 
          className="add-to-cart" 
          onClick={() => cart.addOneToCart(product.id)}
        >Add To Cart</button>
      }
    </div>
  )
}
