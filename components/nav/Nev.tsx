import React from "react";
import Search from "./Search";
import Services from "./Services";
import logo from "@/img/logo.png";
import Image from "next/image";
import Link from "next/link";

function Nev() {
  return (
    <header className="w-full h-16  relative px-2 md:px-6 mt-3  flex justify-between ">
      <div className="flex items-center w-full sm:w-auto gap-6 ">
        <div className="md:w-36 md:h-12 xl:w-44 xl:h-14 relative hidden sm:w-32 sm:h-8 sm:inline">
          <Link href='/' about="logo" >
            <Image fill src={logo} alt="logo" sizes="(max-width: 768px) 50vw" />
          </Link>
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
