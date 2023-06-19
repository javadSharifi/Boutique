import React from "react";
import Search from "./Search";
import Services from "./Services";
import logo from "@/img/logo.png";
import Image from "next/image";
import Link from "next/link";

function Nev() {
  return (
    <header className="relative mt-3 flex h-16 w-full flex-row-reverse justify-between  px-2 md:px-6 ">
      <div>
        <Services />
      </div>
      <div className="flex w-full items-center gap-6 sm:w-auto ">
        <div className="relative hidden sm:inline sm:h-8 sm:w-32 md:h-12 md:w-36 xl:h-14 xl:w-44">
          <Link href="/" about="logo">
            <Image fill src={logo} alt="logo" sizes="(max-width: 768px) 50vw" />
          </Link>
        </div>
        <Search />
      </div>
    </header>
  );
}

export default Nev;
