import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Delivery from '../../Components/Delivery/Delivery';
import Brand from '../../Components/Brand/Brand';
import Features from '../../Components/Features/Features';
import Categories from '../../Components/Categories/Categories';
import Product from '../../Components/Product/Product';


const Home = () => {
  return (
    <div className="w-full ">
      
      {/* banner component */}
      <div className="w-full min-h-[850px] bg-[#f0f2f3] flex items-center justify-center rounded-b-3xl">
        <Banner></Banner>
      </div> 

      {/* Delivery component */}
      <div className="delivery_component w-full min-h-[#150px] ">
        <Delivery></Delivery>
      </div>

      <div className="brand flex justify-center items-center w-full mt-8 mb-8 bg-[#f0f2f3]">
        <Brand />
      </div>

      <div className="w-full flex items-center justify-center mb-[80px]">
        <Features></Features>
      </div>

      <div className="w-full flex items-center justify-center mb-[80px]">
        <Categories></Categories>
      </div>

      <div className="w-full flex items-center justify-center mb-[80px]">
        <Product></Product>
      </div>


    </div>
  )
}

export default Home
