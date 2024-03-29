import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../redux/categorySlice';

export default function Category({ setCategory }) {
  const dispatch = useDispatch();
  const { categories } = useSelector(state => state.categories);

  console.log("CATEGORIES", categories)

  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch]);


  return (
    <div className='w-1/6 bg-gray-100 p-4 max-h-screen'>
      <div className='boder-b pb-1 px-2 text-xl font-bold'>CATEGORIES</div>
      {
        categories?.map((category, i) => (
            <div onClick={() => setCategory(category)} className='text-lg mt-1 cursor-pointer hover:bg-gray-200 p-2' key={i}>{category}</div>
        ))
      }
    </div>
  )
}

//onClick eventinde sadece isim vermek yeterli çünkü fakeStoreAPI'da kategoriye göre
//filtreleme yapıldığında (get products in a specific category): end point is category
//name. ex: 'https://fakestoreapi.com/products/category/jewelery'