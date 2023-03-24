import React from "react";

function CartProductHeader() {
  return (
    <div className="flex justify-between px-9 py-4 bg-slate-100 rounded-xl">
      <div className="flex  gap-16">
        <p>قیمت نهایی</p>
        <p>تعداد</p>
        <p>قیمت واحد</p>
      </div>
      <div>
        <p>سبد خرید شما</p>
      </div>
    </div>
  );
}

export default CartProductHeader;
