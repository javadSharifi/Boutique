import Image from "next/image";
import Link from "next/link";
import React from "react";
import { cartProduct } from "../../interface";
import ColorCard from "./ColorCard";

import PriceCard from "./PriceCard";

function ProductCard({
  img,
  name,
  price,
  colors,
  data_aos ="fade-up",
}: cartProduct) {
  return (
    <Link href={"/product/"+name}>
      <div
        data-aos={data_aos}
        className=" h-[17rem] w-full space-y-2 p-1 shadow-md shadow-slate-400/23  hover:shadow-lg mb-2 border-2 rounded-2xl   "
      >
        <div className="w-full rounded-2xl overflow-hidden  relative h-3/5  md:h-2/3   ">
          <Image
            src={img}
            placeholder="blur"
            alt={name}
            fill
            sizes="(max-width: 2000px) 200px"
            quality={50}
          />
        </div>
        <div className="flex flex-col h-1/3  place-content-between  ">
          <h1 className="text-xl font-bold text-center   ">{name}</h1>
          <div className="flex justify-between px-2 mb-2 ">
            <ColorCard colors={colors} />
            <PriceCard />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
