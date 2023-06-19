import { IProfileCart } from "interface";
import React from "react";

function UserInformationCart({ Icon, placeholder, name, type }: IProfileCart) {
  return (
    <div className="flex flex-col gap-4 rounded-lg border-2 p-3">
      <div className="flex items-center justify-end gap-4 text-base xl:text-lg font-medium">
        <h3>{name}</h3>
        <Icon className="w-12" />
      </div>
      <div dir="rtl" className="px-3">
        <input
          type={type}
          className="border-b-2 w-full pb-2 x:text-lg font-bold focus:outline-none"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}

export default UserInformationCart;
