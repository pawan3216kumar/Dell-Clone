import React from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
  return (
    <div className='italic'>
       <div className='hover:' >
          <h2> <Link to={'/home'} >Products</Link></h2>
       </div>
    </div>
  )
}

export default Products
