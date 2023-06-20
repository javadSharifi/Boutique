import PersonalInfo from '@/components/profile/PersonalInfo'
import Profile from '@/components/profile/Profile'
import Activities from '@/components/profile/myAccount/Activities'
import UserInformation from '@/components/profile/myAccount/UserInformation'
import React from 'react'

function personalInfo() {
  return (
    <Profile>
        <>
        <UserInformation />
        <Activities /> 
        </>
    </Profile>
  )
}

export default personalInfo