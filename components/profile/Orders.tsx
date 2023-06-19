import React from "react";
import ProfileNav from "./ProfileNav";
import Empty from "./Empty";
import { MapPinIcon } from "@heroicons/react/24/outline";

function Orders({ children }: { children: JSX.Element }) {
  return (
    <div className="Box-Profile  ">
      <ProfileNav btnName="+ افزودن آدرس جدید" title="لیست آدرس ها" />
      {children}
    </div>
  );
}

export default Orders;
