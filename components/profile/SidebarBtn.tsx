import { IProfileBtn } from "interface";
import Link from "next/link";
import React from "react";

function SidebarBtn({ Icon, name, link }: IProfileBtn) {
  return (
    <Link
      href={link}
      dir="rtl"
      className="group flex w-full  gap-4  p-3 "
    >
      <Icon className="w-6  group-hover:text-red-500" />
      <h2 className="text-sm font-medium">{name}</h2>
    </Link>
  );
}

export default SidebarBtn;
