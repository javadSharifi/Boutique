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
        className="mySwiper2 w-4/6 relative h-[26rem]  rounded-2xl border-2  "
      >
        <SwiperSlide>
          <Image alt="s" className="w-full h-full " fill src={img1} />
        </SwiperSlide>
        <SwiperSlide>
          <Image alt="s" className="w-full h-full " fill src={img2} />
        </SwiperSlide>
        <SwiperSlide>
          <Image alt="s" className="w-full h-full " fill src={img3} />
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

          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },

          1700: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
        }}
        freeMode={true}
        mousewheel={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs]}
        className="mySwiper w-4/6 h-28"
      >
        <SwiperSlide className=" p-1 border-gray-400 border-2 rounded-2xl ">
          <Image alt="1" className="rounded-xl w-full h-full " src={img1} />
        </SwiperSlide>
        <SwiperSlide className=" p-1 border-gray-400 border-2 rounded-2xl ">
          <Image alt="2" className="rounded-xl w-full h-full " src={img2} />
        </SwiperSlide>
        <SwiperSlide className=" p-1 border-gray-400 border-2 rounded-2xl ">
          <Image alt="3" className="rounded-xl w-full h-full " src={img3} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default GalleryProduct;
