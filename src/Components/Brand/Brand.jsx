import React from 'react'
import brand_image_1 from './../../assets/Brand/brand_1.png';
import brand_image_2 from './../../assets/Brand/brand_2.png';
import brand_image_3 from './../../assets/Brand/brand_3.png';
import brand_image_4 from './../../assets/Brand/brand_4.png';
import brand_image_5 from './../../assets/Brand/brand_5.png';
import brand_image_6 from './../../assets/Brand/brand_6.png';
import brand_image_7 from './../../assets/Brand/brand_7.png';


const Brand = () => {

    const brands = [
        {
            id: 1,
            image: brand_image_1,
        },
        {
            id: 2,
            image: brand_image_2,
        },
        {
            id: 3,
            image: brand_image_3,
        },
        {
            id: 4,
            image: brand_image_4,
        },
        {
            id: 5,
            image: brand_image_5,
        },
        {
            id: 6,
            image: brand_image_6,
        }, 
        {
            id: 7,
            image: brand_image_7,
        },
 
    ]
    console.log(brands)

    return (
       <div className="lg:container mx-auto ">
            <div className="grid grid-cols-7 items-center justify-center gap-5">
                {
                    brands?.map((brand) => (
                        <div key={brand?.id} className="brand_item">
                            <img className="w-auto h-auto" src={brand?.image} alt="brand" />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Brand;