import React from "react";
interface ICartSummary {
  name: string;
  price: string;
}
function CartSummary() {
  const cartSummary: ICartSummary[] = [
    {
      name: "قیمت کل سفارش",
      price: "320,000 تومان",
    },
    {
      name: "بسته‌بندی و ارسال",
      price: "رایگان",
    },
    {
      name: "قیمت قابل پرداخت",
      price: "320,000 تومان",
    },
  ];
  return (
    <div className="w-6/12 lg:w-5/12 xl:w-4/12 border-r-2 py-2 border-gray-300 px-5">
      {cartSummary.map(({ name, price }) => (
        <div key={name} className="flex justify-between">
          <p>{price}</p>
          <p>{name}</p>
        </div>
      ))}
    </div>
  );
}

export default CartSummary;
