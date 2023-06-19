import React from "react";

function Ordering() {
  const [checked, setChecked] = React.useState(true);
  const handleChange = () => {
    setChecked(!checked);
  };

  const order = [
    "کمترین قیمت",
    "بیشترین قیمت",
    "بیشترین تخفیف",
    "بیشترین فروش",
  ];

  return (
    <div className="md:border-2 gap-5 md:gap-0 px-1 text-base  flex-col md:flex-row   flex justify-between rounded-lg w-full md:h-14">
      <div className="md:w-3/12 text-xl  md:text-sm font-bold  gap-4 flex justify-between md:justify-center items-center">
        <input
          onChange={handleChange}
          type="checkbox"
          className="toggle toggle-error"
          checked={checked}
        />
        <p>محصولات موجود</p>
      </div>
      <div
        dir="rtl"
        className="md:w-9/12 flex-col  md:flex-row font-bold  flex text-sm lg:text-base gap-2  lg:gap-5 md:justify-center md:items-center"
      >
        <div
          dir="rtl"
          className="text-2xl md:hidden flex justify-center items-center"
        >
          <p>مرتب‌سازی </p>
        </div>
        {order.map((order) => (
          <p
            className="hover:text-red-500 text-lg my-1  md:text-base cursor-pointer hover:underline underline-offset-1"
            key={order}
          >
            {order}
          </p>
        ))}
      </div>
      <div
        dir="rtl"
        className="w-2/12 hidden md:flex justify-center items-center"
      >
        <p>مرتب‌سازی </p>
      </div>
    </div>
  );
}

export default Ordering;
