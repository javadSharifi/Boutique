import React from "react";
import { OpenModal } from "shared/Modal";
import AddAddress from "./AddAddress";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import ColumnAddress from "./ColumnAddress";

function ListAddress() {
  return (
    <div className="min-h-[50vh]  space-y-4 " dir="rtl">
      <div className="List-Address">
        <p className="col-span-3 md:col-span-2">نام تحویل گیرنده</p>
        <p className="col-span-3 hidden md:inline-block  "> شماره تماس</p>
        <p className="col-span-6 md:col-span-5"> آدرس </p>
        <p className="col-span-2"> عملیات</p>
      </div>
      <ColumnAddress
        address="اصفهان روستای روران کوچه مولوی"
        mobile="09103561731"
        name="محمد جواد شریفی"
      />
    </div>
  );
}

export default ListAddress;
