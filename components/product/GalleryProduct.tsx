import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/pagination";
import { FreeMode, Thumbs, Navigation } from "swiper";
import img1 from "@/img/prodct/1/1.jpg";
import img2 from "@/img/prodct/1/2.jpg";
import img3 from "@/img/prodct/1/3.jpg";
import Image from "next/image";

function GalleryProduct() {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  return (
    <div className="space-y-3 ">
      <Swiper
        navigation={true}
        loop={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Thumbs, Navigation]}
        className="mySwiper2 md:w-4/6 relative h-[26rem]  rounded-2xl border-2  "
      >
        <SwiperSlide>
          <Image
            alt="s"
            className="w-full h-full hover:scale-110 transition duration-300 ease-in-out "
            fill
            src={img1}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="s"
            className="w-full h-full hover:scale-110 transition duration-300 ease-in-out "
            fill
            src={img2}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="s"
            className="w-full h-full hover:scale-110 transition duration-300 ease-in-out "
            fill
            src={img3}
          />
        </SwiperSlide>
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView="auto"
        breakpoints={{
          320: {
            slidesPerView: 3,
            spaceBetween: 5,
          },

          1200: {
            slidesPerView: 4,
            spaceBetween: 10,
          },

          1700: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
        freeMode={true}
        mousewheel={true}
        watchSlidesProgress={true}
        navigation={true}
        modules={[FreeMode, Thumbs, Navigation]}
        className="mySwiper w-11/12 md:w-4/6 h-28   "
      >
        {/* <div className="swiper-button-prev after:text-[30px] after:content-['prev'] "></div>
        <div className="swiper-button-next after:text-[30px] after:content-['next']"></div> */}
        <SwiperSlide className=" p-1 border-gray-400 border-2 rounded-2xl ">
          <Image alt="1" className="rounded-xl w-full h-full " src={img1} />
        </SwiperSlide>
        <SwiperSlide className=" p-1 border-gray-400 border-2 rounded-2xl ">
          <Image alt="2" className="rounded-xl w-full h-full " src={img2} />
        </SwiperSlide>
        <SwiperSlide className=" p-1 border-gray-400 border-2 rounded-2xl ">
          <Image alt="3" className="rounded-xl w-full h-full " src={img3} />
        </SwiperSlide>
        <SwiperSlide className=" p-1 border-gray-400 border-2 rounded-2xl ">
          <Image alt="3" className="rounded-xl w-full h-full " src={img3} />
        </SwiperSlide>
        <SwiperSlide className=" p-1 border-gray-400 border-2 rounded-2xl ">
          <Image alt="3" className="rounded-xl w-full h-full " src={img3} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default GalleryProduct;
