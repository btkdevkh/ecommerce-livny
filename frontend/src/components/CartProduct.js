import { Button } from "react-bootstrap"
import { CartContext } from "../context/CartContext"
import { useContext } from "react"
import { getProductData } from "../helper/getProductData"

export default function CartProduct({ currentProduct }) {
  const cart = useContext(CartContext)
  const productData = getProductData(currentProduct.id)

  return (
    <div>
      <h3>{productData.title}</h3>
      <p>{currentProduct.quantity} Total</p>
      <p>${(currentProduct.quantity * productData.price).toFixed(2)}</p>
      <Button variant="danger" size="sm" onClick={() => cart.deleteFromCart(currentProduct.id)}>Remove</Button>
      <hr />
    </div>
  )
}
