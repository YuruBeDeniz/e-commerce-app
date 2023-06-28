import React from 'react'

export default function Product({ product }) {
  return (
    <div className='w-[320px] p-2 mb-5 mx-5 border rounded-md relative cursor-pointer'>
      <div className='text-2xl font-bold absolute rounded-md top-0 right-0 bg-blue-300 text-white p-2 m-1'><span className='text-sm'>$ </span>{product?.price}</div>
      <img src={product?.image} alt={product?.title} className='w-[200px] h-[200px] object-cover m-auto'/>
      <div className='text-center px-3 mt-3 text-xl'>{product?.title}</div>
    </div>
  )
}
