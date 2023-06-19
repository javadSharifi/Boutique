import AddAddress from "@/components/profile/address/AddAddress";
import ListAddress from "@/components/profile/address/ListAddress";
import Empty from "@/components/profile/Empty";
import Profile from "@/components/profile/Profile";
import ProfileNav from "@/components/profile/ProfileNav";
import { MapPinIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

function addresses() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [data, setData] = useState(false);
  return (
    <Profile>
      <div className="Box-Profile relative ">
        <ProfileNav
          btnName="+ افزودن آدرس جدید"
          title="لیست آدرس ها"
          nameModal="address"
        />
        <AddAddress    />
        {data ? <Empty text="ادرسی ثبت نشد" Icon={MapPinIcon} /> : <ListAddress/>}
      </div>
    </Profile>
  );
}

export default addresses;
