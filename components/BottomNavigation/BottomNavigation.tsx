import { HomeIcon, ShoppingBagIcon, SquaresPlusIcon, UserCircleIcon } from '@heroicons/react/24/outline'
import React from 'react'
import BtnNavigation from './BtnNavigation'

function BottomNavigation() {
  return (
    <div className=" fixed bottom-0 z-50 h-16 w-screen rounded-t-lg border-t-2 border-gray-200   bg-slate-100 sm:hidden   ">
      <div className="mt-1 flex  justify-between gap-3  px-6 ">
        <BtnNavigation link="s" Icon={HomeIcon} name="خانه" />
        <BtnNavigation link="s" Icon={ShoppingBagIcon} name="سبد خرید " />
        <BtnNavigation link="s" Icon={SquaresPlusIcon} name="دست بندی" />
        <BtnNavigation link="profile" Icon={UserCircleIcon} name="پروفایل" />
      </div>
    </div>
  );
}

export default BottomNavigation