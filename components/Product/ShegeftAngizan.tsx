import React from "react";
import img1 from "public/img/moncan/1.jpg";
import img3 from "public/img/moncan/3.jpg";
import img4 from "public/img/moncan/4.jpg";
import img5 from "public/img/moncan/5.jpg";
import img7 from "public/img/moncan/7.jpg";
import shegeftAngez from "public/img/shegeftAngez.png";
import { useTimer } from "react-timer-hook";

import SliderProducts from "./SliderProducts";
import Image from "next/image";

function ShegeftAngizan() {
  const expiryTimestamp = new Date();
  expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 10000);

  const { seconds, minutes, hours } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

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
  return (
    <SliderProducts link="a" products={products}>
      <div className="flex justify-between h-16 px-2  items-center">
        <div className="flex gap-6 ">
          <div className=" text-2xl  lg:text-3xl space-x-2 md:space-x-3 flex">
            <div className="btn-timers ">{hours}</div>
            <span className="text-[3rem] text-#FF9999-500/70  pb-1">:</span>
            <div className="btn-timers ">{minutes}</div>
            <span className="text-[3rem] text-#FF9999-500/70  pb-1">:</span>
            <div className="btn-timers ">{seconds}</div>
          </div>
          <div className="text-cyan-600 hidden md:text-lg  lg:text-xl font-bold text-center items-center self-center">
            <h3 className="">زمان باقی مانده تا پایان سفارش</h3>
          </div>
        </div>
        <div className="relative h-11 w-40 sm:w-52 sm:h-12 md:w-60  lg:w-72 lg:h-16">
          <Image
            fill
            sizes="(max-width: 2000px) 200px"
            alt="شکفت انگیز "
            src={shegeftAngez}
            title="شکفت انگیز "
          />
        </div>
      </div>
    </SliderProducts>
  );
}

export default ShegeftAngizan;
