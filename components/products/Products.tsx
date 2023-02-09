import React from "react";
import Filters from "./filters";
import Ordering from "./Ordering";

function Products() {
  return (
    <div className="my-8 px-8 space-y-7">
      <div className="flex gap-4 ">
        <div className="w-9/12 flex-col ">
          <Ordering />
        </div>
        <div className="w-3/12  space-y-7 flex justify-center flex-col items-center">
          <h1 className="w-full text-2xl  py-3 font-bold  text-red-600 text-center">
            لباس مردانه
          </h1>
          <Filters />
        </div>
      </div>
    </div>
  );
}

export default Products;
