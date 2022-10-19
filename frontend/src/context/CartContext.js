import { createContext, useState } from 'react'
import { getProductData } from '../helper/getProductData'

export const CartContext = createContext({
  items: [],
  getProductQTY: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {}
})

export function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([])

  function getProductQTY(id) {
    const quantity = cartProducts.find(product => product.id === id)?.quantity

    if(quantity === undefined) return 0

    return quantity
  }

  function addOneToCart(id) {
    const quantity = getProductQTY(id)

    if(quantity === 0) {
      setCartProducts([ ...cartProducts, { id: id, quantity: 1 } ])
    } else {
      setCartProducts(
        cartProducts.map(product => product.id === id ? { ...product, quantity: product.quantity + 1 } : product)
      )
    }
  }

  function deleteFromCart(id) {
    setCartProducts(cartProducts => cartProducts.filter(product => product.id !== id))
  }

  function removeOneFromCart(id) {
    const quantity = getProductQTY(id)

    if(quantity === 1) {
      deleteFromCart(id)
    } else {
      setCartProducts(
        cartProducts.map(product => product.id === id ? { ...product, quantity: product.quantity - 1 } : product)
      )
    }
  }

  function getTotalCost() {
    let totalCost = 0
    cartProducts.map((cartItem) => {
      const productData = getProductData(cartItem.id)
      totalCost += (productData.price * cartItem.quantity)
    })

    return totalCost
  }

  const contextValue = {
    items: cartProducts,
    getProductQTY,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost
  }

  return (
    <CartContext.Provider value={contextValue}>
      { children }
    </CartContext.Provider>
  )
}

export default CartProvider
