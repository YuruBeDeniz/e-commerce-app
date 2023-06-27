import Slider from "react-slick";

export default function SliderComp() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div>
      <Slider {...settings}>
        <div className="!flex items-center bg-gray-100 px-6">
            <div>
                <div className="text-6xl font-bold">Find your favorite shoes here!</div>
                <div className="text-lg my-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200">See more</div>
            </div>   
            <img className="w-96 h-96" src="https://images.unsplash.com/photo-1512374382149-233c42b6a83b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2hvZXMlMjBuaWtlfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60" alt="shoe" />
          </div>
          <div className="!flex items-center bg-gray-100 px-6"> 
            <div className="">
                <div className="text-6xl font-bold">Find your favorite shoes here!</div>
                <div className="text-lg my-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200">See more</div>
            </div>                    
            <img className="w-96 h-96"  src="https://images.unsplash.com/photo-1513188732907-5f732b831ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80" alt="shoe" />
          </div>  
        </Slider>    
    </div>
  )
}
