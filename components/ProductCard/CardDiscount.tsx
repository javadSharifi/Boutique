import { addCommas, digitsEnToFa } from "@persian-tools/persian-tools";
import React from "react";

function CardDiscount() {
  return (
    <div className=" bg-red-500/80  absolute z-40   right-5  w-12 h-10 rounded-b-xl ">
      <p className="text-center text-xl mt-1 font-bold text-white">
        {digitsEnToFa(addCommas(56))}%
      </p>
    </div>
  );
}

export default CardDiscount;
