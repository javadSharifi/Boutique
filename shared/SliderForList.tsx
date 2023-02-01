import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Lazy, Navigation } from "swiper";

interface sliderForList {
  delay?: number;
  children: JSX.Element;
  slidesPerView?: {
    sx?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    xxl?: number;
  };
}

function SliderForList({
  delay = 3000,
  children,
  slidesPerView = { sx: 2, sm: 3, md: 3, lg: 4, xl: 5, xxl: 6 },
}: sliderForList) {
  const { lg, md, sm, xl, xxl, sx } = slidesPerView;
  return (
    <Swiper
      slidesPerView="auto"
      breakpoints={{
        320: {
          slidesPerView: sx,
          spaceBetween: 5,
        },
        550: {
          slidesPerView: sm,
          spaceBetween: 5,
        },
        768: {
          slidesPerView: md,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: lg,
          spaceBetween: 30,
        },
        1500: {
          slidesPerView: xl,
          spaceBetween: 20,
        },
        1700: {
          slidesPerView: xxl,
          spaceBetween: 20,
        },
      }}
      grabCursor={true}
      loop={true}
      centeredSlides={true}
      autoplay={{
        delay: delay,
        disableOnInteraction: false,
      }}
      lazy={true}
      modules={[Autoplay, Pagination, Lazy, Navigation]}
      className="w-full h-full "
    >
      <>{children}</>
    </Swiper>
  );
}

export default SliderForList;
