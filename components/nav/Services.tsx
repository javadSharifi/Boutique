import { HeartIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import React from "react";
import Auth from "../Auth";

function Services() {
  return (
    <div className="hidden sm:flex items-cente h-full gap-4 items-center ">
      <div className=" gap-4 flex">
        <HeartIcon className="h-full cursor-pointer w-7 hover:text-red-500 " />
        <ShoppingCartIcon className="h-full cursor-pointer w-7 hover:text-red-500 " />
      </div>
      <Auth/>
    </div>
  );
}

export default Services;
