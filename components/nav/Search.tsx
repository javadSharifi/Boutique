import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React, { useState } from "react";

function Search() {
  const [search, setSearch] = useState<string>("");
  return (
    <div className="bg-slate-300/30  p-1 rounded-xl    h-full  w-full md:w-[40vw] lg:w-[30rem] flex gap-2 ">
      <Link
        href={"/search/" + search}
        className="w-10 flex flex-wrap justify-center"
      >
        <MagnifyingGlassIcon className="w-12  text-slate-500" />
      </Link>
      <input
        type="search"
        onChange={(e) => e.target.value && setSearch(e.target.value)}
        className="w-full bg-transparent outline-none text-lg placeholder-slate-400 font-medium text-gray-500  "
        placeholder="جست و جو فروشگاه"
      />
    </div>
  );
}

export default Search;
