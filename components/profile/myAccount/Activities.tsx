import React from "react";
import ActivitiesCart from "./ActivitiesCart";

function Activities() {
  return (
    <div className="Box-Profile space-y-8 ">
      <h1 className="w-full text-end text-lg font-semibold">فعالیت ها</h1>
      <div className="grid grid-cols-3 gap-5">
        <ActivitiesCart
          description=" سفارش مرجوعی داشتم؟"
          name="مرجوعی"
          number={1}
          className="text-red-500 md:border-red-400"
        />
        <ActivitiesCart
          description=" سفارش تحویل نگرفتم؟"
          name="تحویل نشده"
          number={0}
          className="text-amber-500 md:border-amber-300"
        />
        <ActivitiesCart
          description=" سفارش داشتم؟"
          name="سفارش"
          number={6}
          className="text-green-500 md:border-green-400"
        />
      </div>
    </div>
  );
}

export default Activities;
