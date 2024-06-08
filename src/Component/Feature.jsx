import React from 'react'
import { FeatureProductData } from '../Data/Data1'

const Feature = () => {
  return (
    <div className='bg-slate-800 text-white p-5'>
      {FeatureProductData.map((ele, i) => (
        <div key={i} >
          <h2 className='text-xl'>{ele.name}</h2>
          <h2 className='text-3xl'>{ele.title}</h2>
          <div className='flex justify-center items-center  bg-slate-700'>
            <img src={ele.image} className='w-full max-w-screen-lg h-auto'/>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Feature
