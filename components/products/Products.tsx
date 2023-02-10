import { useRouter } from "next/router";
import React from "react";
import Filters from "./filters";
import Ordering from "./Ordering";
import ProductList from "./ProductList";

function Products() {
  const router = useRouter();

  return (
    <div className="my-8 px-1 md:px-2 lg:px-6 space-y-7">
      <div className="flex gap-4 ">
        <div className="w-full md:w-9/12 space-y-5 ">
          <Ordering />
          <ProductList />
        </div>
        <div className="w-3/12  space-y-7 hidden md:flex  flex-col items-center">
          <h1 className="w-full text-2xl  py-3 font-bold  text-red-600 text-center">
            {router.query.category}
          </h1>
          <Filters />
        </div>
      </div>
    </div>
  );
}

export default Products;
