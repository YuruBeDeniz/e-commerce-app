import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, getCategoryProducts } from "../../redux/productSlice";
import ReactPaginate from "react-paginate";
import Loading from "../Loading/Loading";
import Product from "./Product";

export default function Products({ category }) {
  const dispatch = useDispatch();
  const { products, productsStatus } = useSelector(state => state.products);

  console.log("PRODUCTS: ", products)
  
  useEffect(() => {
    if(category) {
      dispatch(getCategoryProducts(category));
    } else {
      dispatch(getProducts());
    }   
  }, [dispatch, category]);

  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6
  const endOffset = itemOffset + itemsPerPage;

  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <div>
      { productsStatus === "LOADING" ? <Loading /> :
      <>
        <div className="flex flex-wrap">
          {
            currentItems?.map((product, i) => (
              <Product key={i} product={product} />
            ))
          }
        </div>
        <ReactPaginate  
          className="paginate"
          breakLabel="..."  
          nextLabel="next >"  
          onPageChange={handlePageClick}  
          Displayed Page Range = {5}  
          pageCount={pageCount}  
          previousLabel="< previous"  
          renderOnZeroPageCount={null}  
         /> 
      </>
      } 
    </div>
  )
};

//getProducts dispatch ve useEffect ile çağırdıktan sonra useSelector ile göster
//state.products buradaki products store'daki productstan geliyor.

//sayfa yüklendiğinde useEffect ve dispatch ile tüm veriler alınıyor. Ancak sadece gelen
//kategori değerine göre almak istenirse; useEffect kategoriye göre çalışmalı. Kategorideki
//değer her değiştiğinde veri çekme işlemini useEffect içerisinde tekrar tekrar yapılır, ve gelen 
//değer tüm ürünleri getirsin ancak kategoriye göre de ürün getirmeli
