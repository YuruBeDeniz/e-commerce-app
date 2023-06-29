import { useState } from "react"
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";


export default function DetailComp({ productDetail }) {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(0);

    const decrement = () => {
        if(quantity > 0) setQuantity(quantity - 1);
    };
    
    const increment = () => {
        if(quantity < productDetail?.rating.count) setQuantity(quantity + 1);
    };

    const addToBasket = () => {
        dispatch(addToCart({
            id: productDetail?.id, 
            title: productDetail?.title,
            image: productDetail?.image, 
            quantity: productDetail?.quantity, 
            price: productDetail?.price
            }
        ))
    };
    
  return (
    <div className="flex gap-10 my-10">
      <img className="w-[700px] h-[500px] object-cover" src={productDetail?.image} alt={productDetail?.title} />
      <div>
        <div className="text-4xl font-bold">{productDetail?.title}</div>
        <div className="my-2">{productDetail?.description}</div>
        <div>Rating: {productDetail?.rating?.rate}</div>
        <div>Count: {productDetail?.rating?.count}</div>
        <div className="text-3xl font-bold"><span>$ </span>{productDetail?.price}</div>
        <div className="flex items-center gap-5 my-4 ">
            <div onClick={decrement} className="text-4xl cursor-pointer">-</div>
            <input className="w-12 items-center text-4xl font-bold" type="text" value={quantity}/>
            <div onClick={increment} className="text-4xl cursor-pointer">+</div>
        </div>
        <div onClick={addToBasket} className="my-4 border w-[200px] h-16 text-2xl rounded-md bg-gray-200 cursor-pointer flex items-center justify-center">Add to cart</div>
      </div>
    </div>
  )
}
