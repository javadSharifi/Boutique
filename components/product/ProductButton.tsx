import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import React from "react";

function ProductButton() {
  return (
    <div className="flex w-full justify-center ">
      <button className=" button hover:shadow-md hover:shadow-red-300   flex items-center justify-center gap-3 text-xl font-bold w-10/12 h-16 ">
        اضافه کردن به سبد
        <ShoppingBagIcon className="w-6 h-6" />
      </button>
    </div>
  );
}

export default ProductButton;
