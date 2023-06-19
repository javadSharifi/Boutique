import React from "react";
import Comments from "./Comments";
import AddComments from "./AddComments";

function UserComments() {
  return (
    <div className="max-w-3xl  space-y-7 pr-4">
      <Comments />
      <AddComments />
    </div>
  );
}

export default UserComments;
