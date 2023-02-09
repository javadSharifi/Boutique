import Feature from "@/components/feature/Feature";
import GalleryProduct from "@/components/product/GalleryProduct";
import PriceProduct from "@/components/product/PriceProduct";
import ProductButton from "@/components/product/ProductButton";
import ProductDescription from "@/components/product/ProductDescription";
import ProductFeature from "@/components/product/ProductFeature";
import ProductFeedback from "@/components/product/ProductFeedback";
import ProductSize from "@/components/product/ProductSize";
import TopProduct from "@/components/productsSlider/TopProduct";

import React from "react";

function product() {
  return (
    <div>
      <div className="  grid grid-cols-2 gap-4 space-y-3  mt-10 ">
        <div className="flex justify-end ">
          <div className="space-y-3 w-2/3" dir="rtl">
            <ProductDescription />
            <ProductFeedback />
            <ProductFeature />
            <ProductSize />
            <PriceProduct />
            <ProductButton />
          </div>
        </div>
        <div>
          <GalleryProduct />
        </div>
      </div>
      <div className="w-full">
        <Feature className=" w-10 sm:w-16 sm:h-16 md:w-10 h-12 md:h-10 lg:w-16 lg:h-16" />
      </div>
      <div className=" w-10/12  m-auto">
          <TopProduct />
      </div>
    </div>
  );
}

export default product;
