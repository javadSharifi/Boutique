import React from "react";
import SidebarBtn from "./SidebarBtn";
import {
  ArrowRightOnRectangleIcon,
  ArrowUturnRightIcon,
  MapPinIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { TProfileLink } from "interface";


export default function ProfileLink() {
  const DataLink: TProfileLink[] = [
    {
      link: "",
      name: " سفارش ها من",
      Icon: ShoppingCartIcon,
    },
    {
      link: "addresses",
      name: " ادرس ها ",
      Icon: MapPinIcon,
    },
    {
      link: "returned",
      name: "درخواست تعویض ",
      Icon: ArrowUturnRightIcon,
    },
    {
      link: "personalInfo",
      name: "اطلاعت حساب کاربری ",
      Icon: UserIcon,
    },
    {
      link: "orders",
      name: "خروج از حساب",
      Icon: ArrowRightOnRectangleIcon,
    },
  ]
  return (
    <>
      {DataLink.map(({ Icon, link, name }) =>( 
        <SidebarBtn key={link} Icon={Icon} link={link} name={name} />
      ))}
    </>
  );
}
