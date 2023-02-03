import { HeartIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import React from "react";

function Services() {
  return (
    <div className="hidden sm:flex items-cente h-full gap-4 items-center ">
      <div className=" gap-4 flex">
        <HeartIcon className="h-full cursor-pointer w-7 hover:text-red-500 " />
        <ShoppingCartIcon className="h-full cursor-pointer w-7 hover:text-red-500 " />
      </div>
      <button className="button h-12 text-white bg-red-400 hover:bg-red-400 border-0  px-7">
        ثبت نام
      </button>
    </div>
  );
}

export default Services;
