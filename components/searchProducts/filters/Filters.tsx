import React from "react";
import BasedOnPrice from "./BasedOnPrice";
import Category from "./Category";
import Size from "./Size";

function Filters() {
  return (
    <div
      dir="rtl"
      className=" flex flex-col    gap-4 px-2 items-center w-full rounded-lg  "
    >
      <h3 className=" text-2xl md:text-base border-2 w-full text-center py-3 rounded-xl lg:text-lg font-bold"> فیلتر محصول</h3>
      <Category />
      <Size />
      <BasedOnPrice/>
    </div>
  );
}

export default Filters;
