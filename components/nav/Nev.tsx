import React from "react";
import Search from "./Search";
import Services from "./Services";
import logo from "@/img/logo.png";
import Image from "next/image";

function Nev() {
  return (
    <header className="w-full h-16  relative px-2 mt-3  flex justify-between ">
      <div className="flex items-center w-full md:w-auto gap-6 ">
        <div className="md:w-36 md:h-12 xl:w-44 xl:h-14 relative hidden md:inline">
          <Image
            fill
            src={logo}
            alt="logo"
            sizes="(max-width: 768px) 50vw"
          />
        </div>
        <Search />
      </div>
      <div>
        <Services />
      </div>
    </header>
  );
}

export default Nev;
