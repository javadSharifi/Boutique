import React from "react";
import BtnDiscount from "./BtnDiscount";
import CartSummary from "./CartSummary";

function CartFooter() {
  return (
    <div className="w-full  h-36 flex items-center justify-between p-5 bg-slate-200/70 rounded-xl">
      <CartSummary />
      <BtnDiscount />
    </div>
  );
}

export default CartFooter;
