import React from "react";
import Comment from "./Comment";

function Comments() {
  return (
    <div className="flex flex-col">
      <Comment
        name="ممد شوشول"
        text="عالی با این لباس مخ کل دختر محل زدم"
        time="1402/1/4"
      />
      <Comment
        name="ممد شوشول"
        text="عالی با این لباس مخ کل دختر محل زدم"
        time="1402/1/4"
      />
    </div>
  );
}

export default Comments;
