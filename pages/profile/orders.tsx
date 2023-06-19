import Empty from "@/components/profile/Empty";
import Orders from "@/components/profile/Orders";
import Profile from "@/components/profile/Profile";
import { MapPinIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

function orders() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [data, setData] = useState(false);
  return (
    <Profile>
      <Orders>
        {data ? <Empty text="ادرسی ثبت نشد" Icon={MapPinIcon} /> : <div>a</div>}
      </Orders>
    </Profile>
  );
}

export default orders;
