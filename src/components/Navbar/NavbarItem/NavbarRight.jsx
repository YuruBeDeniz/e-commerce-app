import { BiSearch } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { SlBasket } from "react-icons/sl"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCartTotal } from "../../../redux/cartSlice";

export default function NavbarRight() {
  const dispatch = useDispatch();
  const { carts } = useSelector(state => state.carts);

  console.log("CARTS: ", carts)

  useEffect(() => {
    dispatch(getCartTotal())
  }, [dispatch]);

  return (
    <div className="flex items-center gap-8">
      <div className="flex items-center p-3 rounded-full bg-gray-200">
       <input className="bg-gray-200 outline-none" type='text' placeholder='search..'/>
       <BiSearch size={28} />
      </div>
      <AiOutlineHeart size={28} />
      <div className="relative">
        <div className="absolute -top-3 -right-3 text-white bg-red-500 rounded-full w-5 h-5 flex items-center justify-center">
         3
        </div>
        <SlBasket size={28} />
      </div>
    </div>
    
  )
}
