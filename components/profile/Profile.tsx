import React from 'react'
import ProfileSidebar from './ProfileSidebar';

function Profile({ children }: { children: JSX.Element }) {
  return (
    <div className="flex w-full justify-center pt-5 px-2  ">
      <div className="relative flex flex-col-reverse  lg:flex-row lg:justify-between gap-4 w-full md:w-[95%] xl:w-11/12  ">
        <div className="lg:w-10/12 w-full space-y-4 ">
          {children}
        </div>
        <ProfileSidebar />
      </div>
    </div>
  );
}

export default Profile