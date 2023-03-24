import React from "react";

function CartGoNext() {
  return (
    <div className="flex justify-between items-center ">
      <button className="btn btn-error px-16 text-white">
        ثبت و مرحله بعد
      </button>
      <p>
        افزودن کالا به سبد خرید به معنی رزرو آن نیست با توجه به محدودیت موجودی
        سبد خود را ثبت و خرید را تکمیل کنید.
      </p>
    </div>
  );
}

export default CartGoNext;
