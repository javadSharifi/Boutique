import {
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  PencilIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import ProfileCart from "./UserInformationCart";
import { usePathname } from "next/navigation";

function UserInformation() {
         const pathname = usePathname()
  return (
    <div className={`Box-Profile space-y-4 ${pathname =='/profile' ? 'hidden md:inline-block' :''}`}>
      <div className="flex justify-between ">
        <button className="btn-outline btn-error btn gap-3"> <PencilIcon className="w-5 self-center"/> ذخیره </button>
        <h1 className="self-center text-lg font-bold">اطلاعات  کاربری</h1>
      </div>
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
