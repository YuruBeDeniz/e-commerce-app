import Category from '../components/Home/Category';
import Products from '../components/Home/Products';
import SliderComp from '../components/Home/SliderComp';
import Sorting from '../components/Home/Sorting';

export default function Home() {
  return (
    <div>
     <SliderComp />
     <Sorting />
     <div className='flex'>
        <Category />
        <Products />
     </div>
    </div>
  )
}
