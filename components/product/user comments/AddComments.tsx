import React from "react";

function AddComments() {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-xl font-bold"> ثبت نظر</h2>
      <input
        type="text"
        className="input w-full border-2 border-gray-100  placeholder-slate-700"
        placeholder="عنوان نظر"
      />
      <textarea
        className="input min-h-12 h-16 max-h-24 w-full border-2 border-gray-100 pt-2 placeholder-slate-700"
        placeholder="نظر خود را بنویسید …"
      />
      <div className="flex items-center justify-between">
        <p>لطفا قبل از نوشتن نظر خود ، قوانین و ضوابط را مطالعه کنید.</p>
        <button className="btn-outline btn-error btn px-8 font-semibold">
          ثبت نظر{" "}
        </button>
      </div>
    </div>
  );
}

export default AddComments;
