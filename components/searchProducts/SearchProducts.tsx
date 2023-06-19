import { useRouter } from "next/router";
import React, { useState } from "react";
import Filters from "./filters";
import ProductsMobilePage from "./Mobile/ProductsMobilePage";
import Ordering from "./Ordering";
import ProductList from "./ProductList";
import Empty from "../profile/Empty";
import { ArchiveBoxIcon } from "@heroicons/react/24/outline";

function SearchProducts() {
  const router = useRouter();
  const [data, setData] = useState(false);
  return (
    <div className="my-4 space-y-7 px-1 md:my-8 md:px-2 lg:px-6">
      <div className="flex gap-4 ">
        <div className="w-full space-y-5 md:w-9/12 ">
          <ProductsMobilePage
            name={`${router.query.category || router.query.search}`}
          />
          <div className="hidden md:inline">
            <Ordering />
          </div>
          {data ? (
            <Empty text="چیزی یافت نشد" Icon={ArchiveBoxIcon} />
          ) : (
            <ProductList />
          )}
        </div>
        <div className="hidden  w-3/12  flex-col items-center  space-y-7 md:flex">
          <h1 className="w-full py-3   text-center text-2xl  font-bold text-red-600">
            {router.query.category || router.query.search}
          </h1>
          <Filters />
        </div>
      </div>
    </div>
  );
}

export default SearchProducts;
