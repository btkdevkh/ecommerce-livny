import { useState } from 'react'
import productsArray from '../data/products'
import ProductCard from '../components/ProductCard'

export default function Products() {
  const [products, setProducts] = useState(productsArray)

  return (
    <>
      <div className="products">
        {products.map(product => (
          <ProductCard 
            key={product.id} 
            product={product} 
          />
        ))}
      </div>
    </>
  )
}
