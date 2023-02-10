import React from "react";
import Checkbox from "shared/Checkbox";
import Collapse from "shared/Collapse";
import BasedOnPrice from "./BasedOnPrice";
import Category from "./Category";
import Size from "./Size";

function Filters() {
  return (
    <div
      dir="rtl"
      className="bg-slate-200/60 flex flex-col   gap-4 p-2 items-center w-full rounded-lg  "
    >
      <h3 className=" md:text-base  lg:text-lg font-bold"> فیلتر محصول</h3>
      <Category />
      <Size />
      <BasedOnPrice/>
    </div>
  );
}

export default Filters;
