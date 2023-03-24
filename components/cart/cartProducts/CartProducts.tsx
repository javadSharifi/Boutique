/* eslint-disable @next/next/no-img-element */
import React from "react";
import img from "public/img/moncan/1.jpg";
import CartImg from "./CartImg";
import CartProductDetails from "./CartProductDetails";
import CartProductInformation from "./CartProductInformation";
function CartProducts() {
  return (
    <div className="flex justify-between px-9 py-  rounded-xl">
      <CartProductDetails />
      <div className="flex gap-2">
        <CartProductInformation />
        <CartImg alt="a" img={img} />
      </div>
    </div>
  );
}

export default CartProducts;
