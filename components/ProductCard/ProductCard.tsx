import { addCommas, digitsEnToFa } from "@persian-tools/persian-tools";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import CardDiscount from "./CardDiscount";
import ColorCard from "./ColorCard";

import PriceCard from "./PriceCard";

function ProductCard({ img, name, colors, data_aos = "fade-up" }: any) {
  return (
    <Link href={"/product/" + name}>
      <div
        // data-aos={data_aos}
        className=" shadow-slate-400/23 relative mb-2 h-[20rem] w-full space-y-2 rounded-2xl  border-2 p-1 shadow-md hover:shadow-lg   "
      >
        <div className="relative  w-full  overflow-hidden rounded-2xl  h-[70%]   ">
          <CardDiscount />
          <Image
            src={img}
            placeholder="blur"
            alt={name}
            fill
            sizes="(max-width: 2000px) 200px"
            quality={50}
          />
        </div>
        <div className="flex  flex-col  place-content-between  ">
          <h1 className="text-center text-xl font-bold   ">{name}</h1>
          <div className="mb-2 flex justify-between px-2 ">
            <ColorCard colors={colors} />
            <PriceCard />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
