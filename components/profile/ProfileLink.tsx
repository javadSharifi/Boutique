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
    name: " درخواست تعویض یا مرجوع",
    Icon: ArrowUturnRightIcon,
  },
  {
    link: "personal-info",
    name: "اطلاعت حساب کاربری ",
    Icon: UserIcon,
  },
  {
    link: "orders",
    name: "خروج از حساب",
    Icon: ArrowRightOnRectangleIcon,
  },
];

export default function ProfileLink() {
  return (
    <>
      {DataLink.map(({ Icon, link, name }) => {
        // <SidebarBtn key={link} Icon={Icon} link={link} name={name} />;
        
      })}
    </>
  );
}
