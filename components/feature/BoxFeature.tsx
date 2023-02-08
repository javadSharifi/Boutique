import { IBoxFeature } from "interface";
import Image from "next/image";
import React from "react";

function BoxFeature({ img, name,className }: IBoxFeature) {
  return (
    <div
      // data-aos="zoom-in"
      className=" flex flex-col  gap-2 w-40 h-28 text-xs md:text-base  md:w-52  justify-center items-center "
    >
      <div className={`${className} relative`}>
        <Image
          alt={name}
          src={img}
          fill
          sizes="(max-width: 768px) 100vw,
        (max-width: 1200px) 50vw,
        33vw"
          title={name}
        />
      </div>
      <h3 className="font-bold">{name}</h3>
    </div>
  );
}

export default BoxFeature;
