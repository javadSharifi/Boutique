import {
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  PencilIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import ProfileCart from "./UserInformationCart";
import ProfileNav from "../ProfileNav";

function UserInformation() {
  return (
    <div className="Box-Profile">
      <ProfileNav Icon={PencilIcon} btnName="ذخیره" title="اطلاعت کاربری" />
      <div className="grid lg:grid-cols-3 gap-5 ">
        <ProfileCart
          Icon={EnvelopeIcon}
          name="ایمیل"
          placeholder="test@gmail.com"
          type="email"
        />
        <ProfileCart
          Icon={DevicePhoneMobileIcon}
          name="شماره همراه"
          placeholder="**********09"
          type="tel"
        />
        <ProfileCart
          Icon={UserCircleIcon}
          name="نام  و نام خانوادگی"
          placeholder="نام  و نام خانوادگی"
          type="name"
        />
      </div>
    </div>
  );
}

export default UserInformation;
