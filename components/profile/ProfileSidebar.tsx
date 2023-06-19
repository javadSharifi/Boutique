import {
  ArrowUturnRightIcon,
  MapPinIcon,
  ShoppingCartIcon,
  UserCircleIcon,
  UserIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import SidebarBtn from "./SidebarBtn";
import ProfileLink from "./ProfileLink";

function ProfileSidebar() {
  return (
    <div className="min-h-[50vh] hidden lg:inline-block w-3/12 rounded-xl border-2 border-gray-300 p-4">
      <div className="flex justify-end gap-3 border-b-2 pb-5">
        <div className="text-right">
          <h3>محمد جواد شریفی </h3>
          <h3>09103561731</h3>
        </div>
        <UserCircleIcon className="h-12" />
      </div>
      <div className="flex flex-col  gap-4 py-7">
        <ProfileLink/>
      </div>
    </div>
  );
}

export default ProfileSidebar;
