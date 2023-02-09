import React from "react";

function Ordering() {
  const [checked, setChecked] = React.useState(true);
  const handleChange = () => {
    setChecked(!checked);
  };

  const order = [
    "پیش فرض",
    "کمترین قیمت",
    "بیشترین قیمت",
    "جدیدترین ها",
    "بیشترین تخفیف",
    "بیشترین فروش",
  ];

  return (
    <div className="bg-slate-200/60 px-3 text-base  flex justify-between rounded-lg w-full h-14">
      <div className="w-2/12  gap-4 flex justify-center items-center">
        <input
          onChange={handleChange}
          type="checkbox"
          className="toggle toggle-error"
          checked={checked}
        />
        <p>محصولات موجود</p>
      </div>
      <div dir="rtl" className="w-9/12  flex gap-5 justify-center items-center">
        {order.map((order) => (
          <p className="hover:text-red-500 cursor-pointer hover:underline underline-offset-1" key={order}>{order}</p>
        ))}
      </div>
      <div dir="rtl" className="w-1/12 flex justify-center items-center">
        <p>مرتب‌سازی :</p>
      </div>
    </div>
  );
}

export default Ordering;
