import { UserCircleIcon } from "@heroicons/react/24/outline";
import React from "react";

function Comment({
  name,
  time,
  text,
}: {
  name: string;
  time: string;
  text: string;
}) {
  return (
    <div className="flex flex-col gap-2   border-b-2 border-red-200 p-5 pb-9 ">
      <div className="flex  items-center gap-3  ">
        <UserCircleIcon className="w-10" />
        <div className="flex gap-6">
          <p className="text-lg font-bold">{name}</p>
          <p>{time}</p>
        </div>
      </div>
      <h1 className="mr-14 font-semibold ">{text}</h1>
    </div>
  );
}

export default Comment;
