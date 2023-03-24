import { addCommas, digitsEnToFa } from "@persian-tools/persian-tools";
import React from "react";

function CartProductDetails() {
  return (
    <div className="flex  gap-16 items-center">
      <p className="text-red-500 text-lg font-bold">
        {digitsEnToFa(addCommas(300000))} تومان
      </p>
      <p>5</p>
      <p>{digitsEnToFa(addCommas(300000))} تومان</p>
    </div>
  );
}

export default CartProductDetails;
