import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React, { useState } from "react";

function Search() {
  const [search, setSearch] = useState<string>("");
  return (
    <div className="flex  h-full w-full    gap-2  rounded-xl bg-slate-300/30 p-1 md:w-[40vw] lg:w-[30rem] ">
      <button type="submit">
      <Link
        href={"/search/" + search}
        className="flex w-10 flex-wrap justify-center"
        >
        <MagnifyingGlassIcon className="w-12  text-slate-500" />
      </Link>
        </button>
      <input
        type="search"
        onChange={(e) => e.target.value && setSearch(e.target.value)}
        className="w-full bg-transparent text-lg font-medium text-gray-500 placeholder-gray-500 outline-none  "
        placeholder="جست و جو فروشگاه"
      />
    </div>
  );
}

export default Search;
