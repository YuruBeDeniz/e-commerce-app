import React from 'react'

export default function Sorting({ setSort }) {
  return (
    <div className='bg-gray-100 my-5 p-5 flex items-center justify-end'>
      <select onChange={e => setSort(e.target.value)} className='bg-gray-50 py-3 px-5'>
        <option disabled value="">SELECT</option>
        <option value="inc">Increasing</option>
        <option value="dec">Decreasing</option>
      </select>
    </div>
  )
}
