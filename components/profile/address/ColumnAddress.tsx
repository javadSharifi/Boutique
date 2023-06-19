import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import React from "react";
import { OpenModal } from "shared/Modal";

function ColumnAddress({
  name,
  mobile,
  address,
}: {
  name: string;
  mobile: string;
  address: string;
}) {
  return (
    <div className="List-Address rounded-xl w-full  bg-gray-100 py-6 text-sm font-semibold lg:text-base">
      <p className="col-span-3 md:col-span-2">{name}</p>
      <p className="col-span-3 hidden md:inline-block"> {mobile} </p>
      <p className="col-span-6 truncate md:col-span-5">{address}</p>
      <div className="col-span-2  flex  flex-wrap items-center justify-center  gap-4">
        <OpenModal name="address">
          <PencilSquareIcon className="w-6  text-emerald-500" />
        </OpenModal>
        <TrashIcon className="w-6 text-red-400" />
      </div>
    </div>
  );
}

export default ColumnAddress;
