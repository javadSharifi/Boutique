import React from "react";

import ProfileNav from "../ProfileNav";
import AddAddress from "./AddAddress";

function NavAddress({ children }: { children: any }) {
  return (
    <div className="Box-Profile  ">
      <ProfileNav
        btnName="+ افزودن آدرس جدید"
        title="لیست آدرس ها"
        nameModal="address"
      />
      <AddAddress />
      {children}
    </div>
  );
}

export default NavAddress;
