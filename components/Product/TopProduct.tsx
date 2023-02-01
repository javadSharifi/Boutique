import React from 'react'
import SliderProducts from './SliderProducts'
import img1 from "public/img/moncan/1.jpg";
import img3 from "public/img/moncan/3.jpg";
import img4 from "public/img/moncan/4.jpg";
import img5 from "public/img/moncan/5.jpg";
import img7 from "public/img/moncan/7.jpg";

function TopProduct() {
  const products = [
    {
      name: "lorder 1",
      price: "30",
      img: img1,
      colors: ["#FF9999", "#7FFFA1", "#EEF685", "#99DFF9"],
    },
    {
      name: "lorder 1",
      price: "30",
      img: img3,
      colors: ["#FF9999", "#7FFFA1", "#EEF685", "#99DFF9"],
    },
    {
      name: "lorder 1",
      price: "30",
      img: img4,
      colors: ["#FF9999", "#7FFFA1", "#EEF685", "#99DFF9"],
    },
    {
      name: "lorder 1",
      price: "30",
      img: img5,
      colors: ["#FF9999", "#7FFFA1", "#EEF685", "#99DFF9"],
    },
    {
      name: "lorder 1",
      price: "30",
      img: img7,
      colors: ["#FF9999", "#7FFFA1", "#EEF685", "#99DFF9"],
    },
  ];
 
  return <SliderProducts link='as' products={products}  >
    <div className='text-2xl mb-2 font-bold text-center'>
        <h2>برترین محصولات فروشگاه</h2>
    </div>
  </SliderProducts>;
}

export default TopProduct