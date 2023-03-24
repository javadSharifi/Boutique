import Image from "next/image";
import React from "react";

function CartImg({ img, alt }: { img: any; alt: string }) {
  return (
    <div className="w-28 rounded-2xl overflow-hidden relative  ">
      <Image
        src={img}
        placeholder="blur"
        alt="img"
        sizes="(max-width: 2000px) 200px"
        quality={50}
      />
    </div>
  );
}

export default CartImg;
