import { HomeIcon, ShoppingBagIcon, SquaresPlusIcon, UserCircleIcon } from '@heroicons/react/24/outline'
import React from 'react'
import BtnNavigation from './BtnNavigation'

function BottomNavigation() {
  return (
    <div className=" fixed z-50 w-screen h-16 sm:hidden bg-slate-100 border-t-2 border-gray-200   bottom-0 rounded-t-lg   ">
      <div className="flex justify-between  mt-1 px-6  gap-3 ">
        <BtnNavigation link='s'  Icon={HomeIcon} name="خانه" />
        <BtnNavigation link='s' Icon={ShoppingBagIcon} name="سبد خرید " />
        <BtnNavigation link='s' Icon={SquaresPlusIcon} name="دست بندی" />
        <BtnNavigation link='s' Icon={UserCircleIcon} name="پروفایل" />
      </div>
    </div>
  );
}

export default BottomNavigation