import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Delivery from '../../Components/Delivery/Delivery';


const Home = () => {
  return (
    <div className="">
      
      {/* banner component */}
      <div className="w-full min-h-[850px] bg-[#f0f2f3] flex items-center justify-center rounded-b-3xl">
        <Banner></Banner>
      </div> 

      {/* Delivery component */}
      <div className="delivery_component w-full min-h-[#150px] ">
        <Delivery></Delivery>
      </div>


    </div>
  )
}

export default Home
