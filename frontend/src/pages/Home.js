import { useState, useEffect } from 'react'
import diaporamas from '../data/diapos'
// import supabase from '../config/supabaseClient'
// import ProductCard from '../components/ProductCard';

export default function Home() {
  // const [err, setErr] = useState(null)
  // const [products, setProducts] = useState(null)
  const [diapos, setDiapos] = useState(diaporamas)
  const [idx, setIdx] = useState(0)

  const handleClickPrevDiapo = () => {
    if(idx > 0) {
      setIdx(o => o - 1)
    } else {
      setIdx(o => o + 1)
    }
  }

  const handleClickNextDiapo = () => {
    if(idx < diapos.length - 1) {
      setIdx(o => o + 1)
    } else {
      setIdx(o => o - 1)
    }
  }

  useEffect(() => {
    /* 
    const fetchProducts = async () => {
      const { data, error } = await supabase
        .from('products')
        .select()

        if(error) {
          setErr('could not fetch the products')
          setProducts(null)
          console.log(error);
        }

        if(data) {
          setProducts(data)
          setErr(null)
        }
    }

    fetchProducts()
    */
  }, [])
  
  return (
    <div className='home'>
      <div className='home-diapo'>
        {diapos && (
          <>
            <button
              className='btn-prev'
              onClick={handleClickPrevDiapo}
            >
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <img 
              key={diapos[idx].id}
              src={diapos[idx].path} 
              alt={diapos[idx].title} 
            />
            <button
              className='btn-next'
              onClick={handleClickNextDiapo}
            >
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </>
        )}
      </div>

      <br />

      {/* {err && (<p>{err}</p>)}
      {products && (
        <div className='container'>
          <div className='products'>
            {products.map(product => (
              <ProductCard 
                key={product.id}
                product={product} 
              />
            ))}
          </div>
        </div>
      )} */}
    </div>
  )
}
