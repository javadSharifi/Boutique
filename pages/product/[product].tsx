import Feature from "@/components/feature/Feature";
import GalleryProduct from "@/components/product/GalleryProduct";
import PriceProduct from "@/components/product/PriceProduct";
import ProductButton from "@/components/product/ProductButton";
import ProductDescription from "@/components/product/ProductDescription";
import ProductFeature from "@/components/product/ProductFeature";
import ProductFeedback from "@/components/product/ProductFeedback";
import ProductSize from "@/components/product/ProductSize";
import ProductTab from "@/components/product/ProductTab";

import TopProduct from "@/components/productsSlider/TopProduct";
import { Tab } from "@headlessui/react";

import React from "react";

function product() {
  return (
    <div>
      <div className="  flex  flex-col-reverse gap-4 space-y-3 px-2 md:mt-10 md:grid  md:grid-cols-2 ">
        <div className="flex justify-end  ">
          <div className="w-11/12 space-y-3 md:w-2/3 mr-4" dir="rtl">
            <ProductDescription />
            <ProductFeedback />
            <ProductFeature />
            <ProductSize />
            <PriceProduct />
            <ProductButton />
          </div>
        </div>
        <GalleryProduct />
      </div>
      <div className="w-full">
        <Feature className=" h-12 w-10 sm:h-16 sm:w-16 md:h-10 md:w-10 lg:h-16 lg:w-16" />
      </div>
      <ProductTab />
      <div className=" m-auto w-11/12 ">
        <TopProduct />
      </div>
    </div>
  );
}

export default product;
