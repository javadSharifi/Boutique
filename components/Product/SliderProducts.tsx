import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import CartProduct from "./ProductCard/ProductCard";
import { sliderProducts } from "../../interface";
import SliderForList from "../../shared/SliderForList";
import Link from "next/link";

function SliderProducts({ link, products, children }: sliderProducts) {
  return (
    <div className="space-y-4  flex flex-col ">
      {children}
      <div>
        <SliderForList>
          <>
            {products.map(({ img, name, price, colors }) => (
              <SwiperSlide key={name}>
                <CartProduct
                  colors={colors}
                  img={img}
                  name={name}
                  price={price}
                />
              </SwiperSlide>
            ))}
          </>
        </SliderForList>
      </div>
      <div className="flex justify-center ">
        <Link href={link} title="محصولات بیشتر">
          <button
            data-aos="fade-up"
            className="button hover:h-14 h-12 text-red-400 bg-transparent  hover:border-red-500  border-red-500/80  px-14  hover:bg-transparent  hover:text-lg"
          >
            مشاهده همه
          </button>
        </Link>
      </div>
    </div>
  );
}

export default SliderProducts;
