import React from "react";
import SliderForList from "shared/SliderForList";
import img1 from "@/brand/1.jpg";
import img2 from "@/brand/2.jpg";
import img3 from "@/brand/3.jpg";
import img4 from "@/brand/4.jpg";
import img5 from "@/brand/5.jpg";
import img6 from "@/brand/6.jpg";
import img7 from "@/brand/7.jpg";
import img8 from "@/brand/10.jpg";
import img9 from "@/brand/9.jpg";
import img10 from "@/brand/8.jpg";
import Image from "next/image";
import { IBrandList } from "interface";
import { SwiperSlide } from "swiper/react";

function Brand() {
  const brandList: IBrandList[] = [
    {
      img: img1,
      title: "test",
    },
    {
      img: img2,
      title: "test",
    },
    {
      img: img3,
      title: "test",
    },
    {
      img: img4,
      title: "test",
    },
    {
      img: img5,
      title: "test",
    },
    {
      img: img6,
      title: "test",
    },
    {
      img: img7,
      title: "test",
    },
    {
      img: img8,
      title: "test",
    },
    {
      img: img9,
      title: "test",
    },
    {
      img: img10,
      title: "test",
    },
  ];
  return (
    <div
      data-aos="fade-up"
      className="flex  flex-col  justify-center gap-8 py-6"
    >
      <h3 className="text-center text-2xl font-bold ">
        برترین برندها در فروشگاه ما
      </h3>
      <SliderForList
        delay={4000}
        slidesPerView={{ xl: 7, xxl: 7, lg: 6, md: 5, sm: 4, sx: 4 }}
        key="Brand"
      >
        <div className="space-x-3">
          {brandList.map(({ img, title }) => (
            <SwiperSlide key={title}>
              <Image alt={title} src={img} placeholder="blur" />
            </SwiperSlide>
          ))}
        </div>
      </SliderForList>
    </div>
  );
}

export default Brand;
