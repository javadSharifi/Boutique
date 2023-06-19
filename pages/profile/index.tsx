import React from "react";

import Profile from "@/components/profile/Profile";
import Activities from "@/components/profile/myAccount/Activities";
import UserInformation from "@/components/profile/myAccount/UserInformation";

function Index() {
  return (
    <Profile>
      <>
        <UserInformation />
        <Activities />
      </>
    </Profile>
  );
}

export default Index;
