import React from "react";

function Empty({ text, Icon }: { text: string; Icon: any }) {
  return (
    <div className="w-ful flex min-h-[50vh] flex-col items-center  justify-center gap-4 text-center">
      <div className="rounded-full  bg-slate-100 p-6">
        <Icon className="h-12 w-12 text-gray-500" />
      </div>
      <h3 className="font-bold ">{text}</h3>
    </div>
  );
}

export default Empty;
