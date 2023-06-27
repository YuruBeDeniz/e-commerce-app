import { BiSearch } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { SlBasket } from "react-icons/sl"

export default function NavbarRight() {
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
