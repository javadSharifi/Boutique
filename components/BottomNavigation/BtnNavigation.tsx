import Link from "next/link";
import React from "react";

interface btnNavigation {
  name: string;
  Icon: any;
  link: string;
}

function BtnNavigation({ name, Icon, link }: btnNavigation) {
  return (
    <Link href={link} about={name} className="flex hover:text-red-500  flex-col  items-center ">
      <div>
        <Icon className="text-xs  inline-block  h-8" />
      </div>
      <p className=" font-bold  text-base ">{name}</p>
    </Link>
  );
}

export default BtnNavigation;
