import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getDetailProduct } from '../redux/productSlice';
import DetailComp from '../components/Detail/DetailComp';
import Loading from '../components/Loading/Loading';

export default function Detail() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { productDetail, productDetailStatus } = useSelector(state => state.products);

    useEffect(() => {
        dispatch(getDetailProduct(id))
    }, [dispatch, id])

    console.log(productDetail)

  return (
    <div>
      {
        productDetailStatus === "LOADING" 
        ? <Loading /> 
        : <DetailComp productDetail={productDetail} />
      }
    </div>
  )
}

//whenever we go to the detail page, id is changing along with the data
//that's why we should add it to the useEffect param
