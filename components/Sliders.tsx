import React from "react";
import slider1 from "@/img/slider.jpg";
import slider2 from "@/img/slider2.jpg";
import slider3 from "@/img/slider3.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Lazy, Pagination, Navigation } from "swiper";
import Image from "next/image";
import ImageBanner from "../shared/ImageBanner";

export default function Sliders() {
  return (
    <>
      <div className="h-44 md:h-72 lg:h-80 xl:h-96  rounded-2xl overflow-hidden w-full">
        <Swiper
          spaceBetween={5}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          lazy={true}
          modules={[Autoplay, Pagination, Lazy, Navigation]}
          className="h-full"
        >
          <SwiperSlide className=" swiper-lazy">
            <ImageBanner alt="slider1" img={slider1} />
          </SwiperSlide>
          <SwiperSlide className=" swiper-lazy">
            <ImageBanner alt="slider2" img={slider2} />
          </SwiperSlide>
          <SwiperSlide className=" swiper-lazy">
            <ImageBanner alt="slider3" img={slider3} />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
