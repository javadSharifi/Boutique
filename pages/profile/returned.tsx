/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";

import Empty from "@/components/profile/Empty";
import Orders from "@/components/profile/Orders";
import Profile from "@/components/profile/Profile";
import { ArrowUturnRightIcon } from "@heroicons/react/24/outline";

function returned() {
  const [data, setData] = useState(true);
  return (
    <Profile>
      <div className="Box-Profile  ">
        <div className=" border-b-2 pb-4">
          <h2 className="self-center mr-3 font-medium text-right">
            تعویض یا مرجوعی ها
          </h2>
        </div>
        {data ? (
          <Empty text="شما هیچ مرجوی ندارید" Icon={ArrowUturnRightIcon} />
        ) : (
          <div className="min-h-[50vh]">a</div>
        )}
      </div>
    </Profile>
  );
}

export default returned;
