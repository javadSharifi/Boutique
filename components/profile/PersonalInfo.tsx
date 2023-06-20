import React from 'react'
import ProfileNav from './ProfileNav'

function PersonalInfo({ children }: { children: JSX.Element }) {
  return (
    <div className="Box-Profile  ">
      <ProfileNav title="لیست آدرس ها" />
      {children}
    </div>
  )
}

export default PersonalInfo