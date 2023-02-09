import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import CartProduct from "../ProductCard/ProductCard";
import { sliderProducts } from "../../interface";
import SliderForList from "../../shared/SliderForList";
import Link from "next/link";

function ProductsSlider({ link, products, children }: sliderProducts) {
  return (
    <div className="space-y-4  ">
      {children}
      <div>
        <SliderForList key="ProductsSlider">
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
            className="button hover:h-14 h-12 px-14  button-outline"
          >
            مشاهده همه
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ProductsSlider;
