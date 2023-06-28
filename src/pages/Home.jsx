import { useState } from 'react';
import Category from '../components/Home/Category';
import Products from '../components/Home/Products';
import SliderComp from '../components/Home/SliderComp';
import Sorting from '../components/Home/Sorting';

export default function Home() {
  const [sort, setSort] = useState("");
  const [category, setCategory] = useState("");

  return (
    <div>
     <SliderComp />
     <Sorting />
     <div className='flex'>
        <Category setCategory={setCategory} />
        <Products category={category} />
     </div>
    </div>
  )
}
